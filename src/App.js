import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import MyProfile from './pages/MyProfile';
import Today from './pages/Today';
import NotFound from './pages/NotFound';
import TaskPlanner from "./pages/TaskPlanner";
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import CustomRoute from './routes/CustomRoutes';
import './App.css';
import LoginPage from "./pages/login/LoginPage";
import SignUp from "./pages/register/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={LoginPage} />
          <PublicRoute exact path="/register" component={SignUp} />
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
