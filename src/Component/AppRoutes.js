import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyTask from '../pages/MyTask';
import MyProfile from '../pages/MyProfile';
import Today from '../pages/Today';
import NewTask from '../pages/NewTask';
import Logout from '../pages/logout';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MyTask />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/NewTask" element={<NewTask />} />
      <Route path="/Today" element={<Today />} />
      <Route path="/Logout" element={<Logout/>} />
    </Routes>
  );
}

export default AppRoutes;
