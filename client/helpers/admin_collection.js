adminCurrentCollectionCursor = function() {
  switch (adminCurrentCollectionName()) {
    case 'People':
      return People.find({}, {sort: {name: 1}});
      break;
    case 'Teams':
      return Teams.find({}, {sort: {name: 1}});
      break;
  }
}

adminCurrentCollectionAdd = function(item) {
  switch (adminCurrentCollectionName()) {
    case 'People':
      return Meteor.call('addPerson', item, function(error, id){
        if (error) {
          throwError(error.reason);
        }
      });
      break;
    case 'Teams':
      return Meteor.call('addTeam', item, function(error, id){
        if (error) {
          throwError(error.reason);
        }
      });
      break;
  }
}

adminCurrentCollectionRemove = function(id) {
  switch (adminCurrentCollectionName()) {
    case 'People':
      Meteor.call('removePerson', id);
      break;
    case 'Teams':
      Meteor.call('removeTeam', id);
      break;
  }
}

adminOptionPath = function(id) {
  switch (adminCurrentCollectionName()) {
    case 'Teams':
      return Meteor.Router.teamMembersPath(id);
      break;
    case 'People':
      return Meteor.Router.personTeamsPath(id);
      break;      
  }  
}

adminCurrentCollectionName = function() {
  return Session.get('currentAdminCollection');
}

adminCurrentCollectionOptionsName = function(){
  switch (adminCurrentCollectionName()) {
    case 'People':
      return 'Teams';
      break;
    case 'Teams':
      return 'People';
      break;
  }  
}


