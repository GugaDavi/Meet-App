import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

// Authentication Pages

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// Default Pages

import Dashboard from '../pages/Dashboard';
import MeetUpDatails from '../pages/MeetUpDatails';
import Profile from '../pages/Profile';
import CreateAndEditMeetUp from '../pages/CreateAndEditMeetUp';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup" component={CreateAndEditMeetUp} isPrivate />
      <Route path="/meetup-datails" component={MeetUpDatails} isPrivate />
    </Switch>
  );
}

export default Routes;
