
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './logIn'; // Assurez-vous que le chemin est correct
import SignUp from './signUp'; // Assurez-vous que le chemin est correct
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Logout() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}

export default Logout;
