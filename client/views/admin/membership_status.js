Template.membershipStatus.helpers({
  related: function() {
    if (adminCurrentCollectionName() == 'People') {
      if (Memberships.findOne({personId: Session.get('currentItemId'), teamId: this._id})) {
        return true;
      } else {
        return false;
      }
    }
    if (adminCurrentCollectionName() == 'Teams') {
      if (Memberships.findOne({personId: this._id, teamId: Session.get('currentItemId')})) {
        return true;
      } else {
        return false;
      }
    }
  }
});