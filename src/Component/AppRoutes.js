import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyProfile from '../pages/MyProfile';
import Today from '../pages/Today';
import NewTask from '../pages/NewTask';
import Logout from '../pages/logout';
import LoginPage from "./LoginPage";
import TaskPlanner from "./TaskPlanner";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/TaskPlanner" element={<TaskPlanner/>} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/NewTask" element={<NewTask />} />
      <Route path="/Today" element={<Today />} />
      <Route path="/Logout" element={<Logout/>} />
    </Routes>
  );
}

export default AppRoutes;
