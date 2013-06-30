People = new Meteor.Collection('people');
Meteor.methods({
  removePerson: function(id) {
    People.remove(id);
    Memberships.remove({personId: id});
  },
  addPerson: function(aPerson) {
    return People.insert(aPerson);
  }
});