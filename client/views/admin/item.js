Template.item.helpers({
  optionLabel: function() {
    switch (Session.get('currentAdminCollection')) {
      case 'People':
        return 'Teams';
        break;
      case 'Teams':
        return 'People';
        break;
    }
  }
});