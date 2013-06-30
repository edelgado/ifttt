Teams = new Meteor.Collection('teams');
Meteor.methods({
  removeTeam: function(id) {
    Teams.remove(id);
    Memberships.remove({teamId: id});
  },
  addTeam: function(aTeam) {
    return Teams.insert(aTeam);
  }
});