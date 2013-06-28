adminCurrentCollectionCursor = function() {
  switch (adminCurrentCollectionName()) {
    case 'People':
      return People.find();
      break;
    case 'Teams':
      return Teams.find();
      break;
  }
}

adminCurrentCollectionAdd = function(item) {
  switch (adminCurrentCollectionName()) {
    case 'People':
      return People.insert(item);
      break;
    case 'Teams':
      return Teams.insert(item);
      break;
  }
}

adminCurrentCollectionRemove = function(id) {
  switch (adminCurrentCollectionName()) {
    case 'People':
      People.remove(id);
      break;
    case 'Teams':
      Teams.remove(id);
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


