Template.item.helpers({
  optionLabel: function() {
    return adminCurrentCollectionOptionsName();
  }
});

Template.item.events({
  'click .delete': function(e) {
    adminCurrentCollectionRemove(this._id);
  }
});