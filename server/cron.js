var cronJob = Meteor.require('cron').CronJob;
new cronJob('* * * * * *', function(){
    console.log('You will see this message every second');
}, null, true);