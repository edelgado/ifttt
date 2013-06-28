Template.newItem.events({
  'submit form': function(e) {
    e.preventDefault();

    var item = {
      name: $(e.target).find('[name=item-name]').val()
    }
    
    adminCurrentCollectionAdd(item);
    
    // Clear name:
    $(e.target).find('[name=item-name]').val('');
    
  }
});