Template.assignments.helpers({
  teams: function() {
    return Teams.find({}, {sort: {name: 1}});
  },
  teamPairs: function() {
    return Pairings.find({teamId: this._id});
  },
  personName: function(id) {
    return People.findOne(id).name; 
  }
});
Template.assignments.events({
  'click .pair-folks': function(e) {
    e.preventDefault();
    Meteor.call('pairFolks');
  }
});