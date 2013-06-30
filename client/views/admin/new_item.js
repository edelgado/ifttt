Template.newItem.helpers({
  isPerson: function() {
   return (adminCurrentCollectionName() === 'People');
  }
});
Template.newItem.events({
  'submit form': function(e) {
    e.preventDefault();

    var item = {
      name: $(e.target).find('[name=item-name]').val(),
      email: $(e.target).find('[name=item-email]').val()
    }
    
    adminCurrentCollectionAdd(item);
    
    // Clear fields:
    $(e.target).find('[name=item-name]').val('');
    $(e.target).find('[name=item-email]').val('');
    
  }
});