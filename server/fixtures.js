if (People.find().count() === 0) {
  People.insert({
    name: 'Enrique',
    email: 'delgado.enrique@gmail.com'
  });

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
    email: 'casey@example.com'
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