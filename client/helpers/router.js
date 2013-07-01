Meteor.Router.add({
  '/': 'assignments',
  '/people': 'peopleList',
  '/teams': 'teamList',
  '/admin/scheduler': 'scheduler',
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
  },
  '/admin/team/:_id/members': {
    as: 'teamMembers',
    to: 'memberships',
    and: function(id) {
      Session.set('currentAdminCollection', 'Teams');
      Session.set('currentItemId', id);
    }
  },
  '/admin/person/:_id/teams': {
    as: 'personTeams',
    to: 'memberships',
    and: function(id) {
      Session.set('currentAdminCollection', 'People');
      Session.set('currentItemId', id);
    }
  }
});
Meteor.Router.filters({
  'clearErrors': function(page) {
    clearErrors();
    return page;
  }
});
Meteor.Router.filter('clearErrors');