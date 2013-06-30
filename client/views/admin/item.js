Template.item.helpers({
  optionLabel: function() {
    return adminCurrentCollectionOptionsName();
  },
  optionHref: function() {
    return adminOptionPath(this._id);
  },
  isPerson: function() {
   return (adminCurrentCollectionName() === 'People');
  }
});

Template.item.events({
  'click .delete': function(e) {
    adminCurrentCollectionRemove(this._id);
  }
});