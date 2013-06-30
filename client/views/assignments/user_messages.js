Template.userMessages.helpers({
  messages: function() {
    return UserMessages.find({});
  },
  show: function() {
    if (UserMessages.find({}).count() > 0) {
      return true;
    } else {
      return false;
    }  
  }
});