import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyProfile from '../pages/MyProfile';
import Today from '../pages/Today';
import Logout from '../pages/logout';
import LoginPage from "../pages/login/LoginPage";
import TaskPlanner from "./TaskPlanner";
import SignUp from "../pages/register/SignUp";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<SignUp/>} />
      <Route path="/TaskPlanner" element={<TaskPlanner/>} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/Today" element={<Today />} />
      <Route path="/Logout" element={<Logout/>} />
    </Routes>
  );
}

export default AppRoutes;
