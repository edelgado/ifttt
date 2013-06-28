Template.adminList.helpers({
  items: function() {
    switch (Session.get('currentAdminCollection')) {
      case 'People':
        return People.find();
        break;
      case 'Teams':
        return Teams.find();
        break;
    }
  }
});