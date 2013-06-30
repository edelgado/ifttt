// We don't really need a pairings collection, but having one will 
// leverage Meteor's collection reactivity and that's just 
// plain awesome for our main UI.
Pairings = new Meteor.Collection('pairings');
Meteor.methods({
  pairFolks: function(id) {
    console.log('Hard core pairing action!');
  }
});