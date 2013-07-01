Template.scheduler.helpers({
  appConfig: function() {
    var cfg = AppConfig.findOne();
    return cfg;
  }
});

Template.scheduler.events({
  'submit form': function(e) {
    e.preventDefault();
    var cfg = AppConfig.findOne();
    var newString = $(e.target).find('input[name=cron-string]').val();
    AppConfig.update({_id: cfg._id}, {$set: {cronString: newString}}, function(error) {
          if (error) {
            // display the error to the user
            alert(error.reason);
          } else {
            $('#save-button').removeClass('btn-primary').addClass('btn-success').html('Saved!');
            Meteor.setTimeout(function(){
              $('#save-button').removeClass('btn-success').addClass('btn-primary').html('Save');
            }, 1000);
          }
        });
    
  }
});