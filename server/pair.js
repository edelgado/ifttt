/* Server-only code */

var folksPaired;

Meteor.methods({
  pairFolks: function() {
    console.log('\n-=> Hardcore pairing action... <=-');
    // Reset:
    folksPaired = [];
    // Clear the pairings collection and messages (powers the UI)
    Pairings.remove({});
    UserMessages.remove({});
    // Get an array of everyone (each element is an object), shuffled:
    var allPeeps = _.shuffle(People.find().fetch());
    // Select a pair for everyone in the organization:
    _.each(allPeeps, selectOnePair);
  },
  setCron: function(str) {
    console.log('Setting cron to: ' + str);
    var crone = new Meteor.Cron({
      events: {
        str: callWrapper
      }
    });
  }
});

/* "Private" methods (not visible to the client) */

/**
  * Intelligently gets a match for a person. We want people to 
  * be paired with equal frequency.
  */
var selectOnePair = function(aPerson, index, allPeeps) {
  // Skip if this person has been paired already:
  if (_.indexOf(folksPaired, aPerson._id) != -1) {
    return;
  }
  //console.log('Looking at ' + aPerson.name + '\nHistory: ' + aPerson.recentPairings);
  // Who all are my teammates? (I could be in more than one team!)
  var myTeammateIds = teammateIdsForPerson(aPerson._id);
  // Who have I not met with yet in the past, and that have not been paired yet in this round?
  var availableFolks = _.difference(myTeammateIds, aPerson.recentPairings, folksPaired);
  //console.log('Looking at ' + aPerson.name + ', availableFolks: ' + availableFolks);
  //console.log('Teammates: ' + myTeammateIds + '\nHistory: ' + aPerson.recentPairings + '\nAlready Paired:' + folksPaired);
  //console.log('From available teammates: ' + availableFolks);
  if (availableFolks.length > 0) {
    // There are still teammates we haven't paired with.
    var luckyWinnerId = availableFolks[_.random(0, availableFolks.length - 1)];
    var luckyWinner = People.findOne({_id: luckyWinnerId});
    console.log('=> ' + aPerson.name + ' <> ' + luckyWinner.name);
    // Mark me and the lucky winner as "done". This will prevent one person
    // from being pared twice in one round.
    folksPaired.push(aPerson._id, luckyWinnerId);
    // Update the histories for both parties:
    addToHistory(aPerson._id, luckyWinnerId);
    addToHistory(luckyWinnerId, aPerson._id);
    // Update the current state of pairings:
    Pairings.insert({
      teamId: _.first(findCommonTeams(aPerson._id, luckyWinnerId)),
      firstId: aPerson._id,
      secondId: luckyWinnerId
    });
    //console.log(folksPaired);
    return;
  } else if (availableFolks.length === 0) {
    // Is it because every other person in my team has been paired already?
    if (_.difference(myTeammateIds,folksPaired).length === 0) {
      // It's possible to be a lone ranger sometimes!
      console.log('=> ' + aPerson.name + ' is doing a solo round');
      UserMessages.insert({message: aPerson.name + ' is doing a solo round.'});
      return;
    }
    // It wasn't that. Let's see if I have met with everyone in my team, then:
    /* var availableFolks = _.difference(myTeammateIds, aPerson.recentPairings);*/
    if (_.difference(myTeammateIds, aPerson.recentPairings).length === 0) {
      console.log(aPerson.name + ' seems to have met with everyone in their team, so lets call an old friend.');
    } else {
      console.log(aPerson.name + ' hasn\'t met with everyone yet, but the other teammates are taken, so it may get the same teammate as last time');
      //UserMessages.insert({message: aPerson.name + ' hasn\'t met with everyone yet, but the other teammates are taken, so it may get the same teammate as last time.'});
    }
    //console.log('Teammates: ' + myTeammateIds + '\nHistory: ' + aPerson.recentPairings + '\nAlready Paired:' + folksPaired);
    // Adjust history. Lets take out the oldest person I paired with:
    var updatedPairings = _.tail(aPerson.recentPairings);
    People.update({_id: aPerson._id}, {$set: {recentPairings: updatedPairings}});
    var thisPerson = People.findOne({_id: aPerson._id});
    // Try this again (via recursion):
    selectOnePair(thisPerson);
  }
}

/**
  * Given a person Id, get the Ids of all of his or her 
  * teammates (spans over multiple teams).
  */
var teammateIdsForPerson = function(personId) {
  //console.log('Current person Id is: ' + personId);
  var myTeamIds = teamIdsForPerson(personId);
  var myTeammates = Memberships.find({teamId: {$in: myTeamIds}}).fetch();
  //console.log(myTeammates);
  var myTeammateIds = [];
  _.each(myTeammates, function(element, index, list){
      if (personId != element.personId) {
        myTeammateIds.push(element.personId);
        //console.log('Teammate: ' + element.personId);
      }
  });
  return myTeammateIds;
};

/**
  * Given a person Id, returns the Ids of each team
  * the person is a member of.
  */
var teamIdsForPerson = function(personId) {
  var myTeams = Memberships.find({personId: personId}).fetch();
  var myTeamIds = [];
  _.each(myTeams, function(element, index, list){
      myTeamIds.push(element.teamId);
  });
  return myTeamIds;
}

/**
  * Given a person Id, add another person Id to their
  * list of recent pairings.
  */
var addToHistory = function(leftId, rightId) {
  var leftPerson = People.findOne({_id: leftId});
  var leftRecentPairings = leftPerson.recentPairings;
  leftRecentPairings.push(rightId);
  People.update({_id: leftId}, {$set: {recentPairings: leftRecentPairings}});
}

var findCommonTeams = function(leftId, rightId) {
  var leftTeamIds = teamIdsForPerson(leftId);
  var rightTeamIds = teamIdsForPerson(rightId);
  var commonTeams = _.intersection(leftTeamIds, rightTeamIds);
  return commonTeams;
}

var callWrapper = function() {
  console.log('** Cron-activated pairing...');
  Meteor.call('pairFolks');
};

var testTimeStuff = function() {
  console.log('Howdy!');
}

var cronStr = AppConfig.findOne().cronString;
//console.log(cronStr);
cronStr = cronStr + '';

var crone = new Meteor.Cron({
  events: {
    cronStr: callWrapper,
    cronStr: testTimeStuff
  }
});
//console.log(crone);