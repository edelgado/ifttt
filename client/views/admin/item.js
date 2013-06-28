Template.item.helpers({
  optionLabel: function() {
    return adminCurrentCollectionName();
  }
});

Template.item.events({
  'click .delete': function(e) {
    adminCurrentCollectionRemove(this._id);
  }
});