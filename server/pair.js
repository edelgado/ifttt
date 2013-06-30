/* Just on the server */
Meteor.methods({
  pairFolks: function(id) {
    console.log('Hardcore pairing action...');
    // Get an array of everyone (each element is an object), shuffled:
    var allPeeps = _.shuffle(People.find().fetch());
    // Select a pair for everyone in the organization:
    _.each(allPeeps, selectOnePair);
  }
});

/* "Private" methods (not visible to the client) */

/**
  * Intelligently gets a match for a person. We want people to 
  * be paired with equal frequency.
  */
var selectOnePair = function(aPerson) {
  console.log("Choosing a pair for " + aPerson.name);
  // Who all are my teammates? (I could be in more than one team!)
  var myTeammateIds = teammateIdsForPerson(aPerson._id);
  //var myTeammates = Memberships.find({teamId: { $in: myTeamIds }}, {fields: {'personId': 1}})
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
        console.log('Teammate: ' + element.personId);
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