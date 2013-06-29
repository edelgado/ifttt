if (People.find().count() === 0) {
  People.insert({
    name: 'Elizabeth',
    email: 'elizabeth@example.com'
  });
  
  People.insert({
    name: 'Sophia',
    email: 'sophia@example.com'
  });
  
  People.insert({
    name: 'Ludwig',
    email: 'ludwig@example.com'
  });
  
  People.insert({
    name: 'Vinny',
    email: 'vinny@example.com'
  });
  
  People.insert({
    name: 'Stacey',
    email: 'stacey@example.com'
  });

  People.insert({
    name: 'Angela',
    email: 'angela@example.com'
  });

  People.insert({
    name: 'Casey',
    email: 'casey@example.com',
  });

  People.insert({
    name: 'William',
    email: 'william@example.com'
  });
}

if (Teams.find().count() === 0) {
  Teams.insert({
    name: 'Team 1'
  });

  Teams.insert({
    name: 'Team 2'
  });
}

if (Memberships.find().count() === 0) {
  // Team 1 members
  var team = Teams.findOne({name: 'Team 1'});
  // Add Elizabeth
  var person = People.findOne({email: 'elizabeth@example.com'});
  Memberships.insert({
    personId: person._id,
    teamId: team._id
  });
  
  // Add Sophia
  var person = People.findOne({email: 'sophia@example.com'});
  Memberships.insert({
    personId: person._id,
    teamId: team._id
  });
  
  // Add Ludwig
  var person = People.findOne({email: 'ludwig@example.com'});
  Memberships.insert({
    personId: person._id,
    teamId: team._id
  });
  
  // Add Vinny
  var person = People.findOne({email: 'vinny@example.com'});
  Memberships.insert({
    personId: person._id,
    teamId: team._id
  });
  
  // Add Stacey
  var person = People.findOne({email: 'stacey@example.com'});
  Memberships.insert({
    personId: person._id,
    teamId: team._id
  });
  
  // Team 2 members
  var team = Teams.findOne({name: 'Team 2'});
  // Add Angela
  var person = People.findOne({email: 'angela@example.com'});
  Memberships.insert({
    personId: person._id,
    teamId: team._id
  });
  
  // Add Casey
  var person = People.findOne({email: 'casey@example.com'});
  Memberships.insert({
    personId: person._id,
    teamId: team._id
  });
  
  // Add William
  var person = People.findOne({email: 'william@example.com'});
  Memberships.insert({
    personId: person._id,
    teamId: team._id
  });
  
  // Add Ludwig
  var person = People.findOne({email: 'ludwig@example.com'});
  Memberships.insert({
    personId: person._id,
    teamId: team._id
  });  
}