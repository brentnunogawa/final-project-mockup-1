/**
 * Created by Jordan on 10/27/16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

/* eslint-disable object-shorthand */

Template.Profile_Page.helpers({

  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
});

Template.Profile_Page.events({


});
