Meteor.Router.add({
  '/': 'assignments',
  '/people': 'peopleList',
  '/teams': 'teamList',
  '/admin/people': {
    as: 'adminPeople',
    to: 'adminList',
    and: function() {
      Session.set('currentAdminCollection', 'People');
    }
  },
  '/admin/teams': {
    as: 'adminTeams',
    to: 'adminList',
    and: function() {
      Session.set('currentAdminCollection', 'Teams');
    }
  }
});