if (People.find().count() === 0) {
  People.insert({
    name: 'Elizabeth',
    email: 'elizabeth@example.com',
    recentPairings: []
  });
  
  People.insert({
    name: 'Sophia',
    email: 'sophia@example.com',
    recentPairings: []
  });
  
  People.insert({
    name: 'Ludwig',
    email: 'ludwig@example.com',
    recentPairings: []
  });
  
  People.insert({
    name: 'Vinny',
    email: 'vinny@example.com',
    recentPairings: []
  });
  
  People.insert({
    name: 'Stacey',
    email: 'stacey@example.com',
    recentPairings: []
  });

  People.insert({
    name: 'Angela',
    email: 'angela@example.com',
    recentPairings: []
  });

  People.insert({
    name: 'Casey',
    email: 'casey@example.com',
    recentPairings: []
  });

  People.insert({
    name: 'William',
    email: 'william@example.com',
    recentPairings: []
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

if (Pairings.find().count() === 0) {
  // Team 1 pairings
  var team = Teams.findOne({name: 'Team 1'});
  // A pairing:
  var firstPerson = People.findOne({email: 'elizabeth@example.com'});
  var secondPerson = People.findOne({email: 'vinny@example.com'});
  Pairings.insert({
    teamId: team._id,
    firstId: firstPerson._id,
    secondId: secondPerson._id
  });
  // A pairing:
  var firstPerson = People.findOne({email: 'sophia@example.com'});
  var secondPerson = People.findOne({email: 'stacey@example.com'});
  Pairings.insert({
    teamId: team._id,
    firstId: firstPerson._id,
    secondId: secondPerson._id
  });
  // Team 2 pairings
  var team = Teams.findOne({name: 'Team 2'});
  // A pairing:
  var firstPerson = People.findOne({email: 'angela@example.com'});
  var secondPerson = People.findOne({email: 'casey@example.com'});
  Pairings.insert({
    teamId: team._id,
    firstId: firstPerson._id,
    secondId: secondPerson._id
  });
  // A pairing:
  var firstPerson = People.findOne({email: 'william@example.com'});
  var secondPerson = People.findOne({email: 'ludwig@example.com'});
  Pairings.insert({
    teamId: team._id,
    firstId: firstPerson._id,
    secondId: secondPerson._id
  });
}