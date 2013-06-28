Template.item.helpers({
  optionLabel: function() {
    return adminCurrentCollectionName();
  }
});

Template.item.events({
  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Oh noes, are you sure?")) {
      var currentPostId = Session.get('currentPostId');
      adminCurrentCollectionRemove(this._id);
    }
  }
});