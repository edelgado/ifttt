Template.item.helpers({
  optionLabel: function() {
    return adminCurrentCollectionOptionsName();
  },
  optionHref: function() {
    return adminOptionPath(this._id);
  }
});

Template.item.events({
  'click .delete': function(e) {
    adminCurrentCollectionRemove(this._id);
  }
});