Teams = new Meteor.Collection('teams');
Meteor.methods({
  removeTeam: function(id) {
    Teams.remove(id);
    Memberships.remove({teamId: id});
  },
  addTeam: function(aTeam) {
    teamWithSameName = Teams.findOne({name: aTeam.name});
    if (teamWithSameName) {
      throw new Meteor.Error(409, 'A team with the same name already exists.');
    }
    var team = _.pick(aTeam, 'name');
    return Teams.insert(team);
  }
});