Template.memberships.helpers({
  options: function() {
    if (adminCurrentCollectionName() == 'People') {
      return Teams.find();
    }
    if (adminCurrentCollectionName() == 'Teams') {
      return People.find();
    }
  },
  currentItem: function() {
    if (adminCurrentCollectionName() == 'People') {
      return People.findOne(Session.get('currentItemId'));
    }
    if (adminCurrentCollectionName() == 'Teams') {
      return Teams.findOne(Session.get('currentItemId'));
    }
  }
});