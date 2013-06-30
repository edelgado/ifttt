People = new Meteor.Collection('people');
Meteor.methods({
  removePerson: function(id) {
    People.remove(id);
    Memberships.remove({personId: id});
  },
  addPerson: function(aPerson) {
    personWithSameEmail = People.findOne({email: aPerson.email});
    if (personWithSameEmail) {
      throw new Meteor.Error(409, 'A person with the same email already exists.');
    }
    var person = _.pick(aPerson, 'name', 'email');
    return People.insert(person);
  }
});