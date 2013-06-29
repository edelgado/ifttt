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
Template.membershipStatus.events({
  'change input[type=checkbox]': function(e) {    
    var op, pId, tId;
    
    if ($(e.target).is(':checked')) {
      op = 'add';
    } else {
      op = 'delete';
    }
    
    if (adminCurrentCollectionName() == 'People') {
      pId = Session.get('currentItemId');
      tId = this._id;
    } else if (adminCurrentCollectionName() == 'Teams') {
      pId = this._id;
      tId = Session.get('currentItemId');
    }
    
    switch(op) {
      case 'add':
        Memberships.insert({personId: pId, teamId: tId});
        break;
      case 'delete':
        var existingRecords = Memberships.find({personId: pId, teamId: tId}).fetch();
        _.each(existingRecords, function(element, index, list){
          Memberships.remove(element._id);
        });
        break;
    }
  }
});