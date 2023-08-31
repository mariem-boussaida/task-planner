import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import MyProfile from './pages/MyProfile';
import Today from './pages/Today';
import NotFound from './pages/NotFound';
import LoginPage from "./pages/LoginPage";
import TaskPlanner from "./pages/TaskPlanner";

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import CustomRoute from './routes/CustomRoutes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={LoginPage} />
          <PrivateRoute path="/TaskPlanner" component={TaskPlanner} />
          <PrivateRoute path="/MyProfile" component={MyProfile} />
          <PrivateRoute path="/Today" component={Today} />
          <CustomRoute component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
