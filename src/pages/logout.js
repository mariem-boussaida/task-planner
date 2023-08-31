
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './login/LoginPage'; // Assurez-vous que le chemin est correct
import SignUp from './register/SignUp'; // Assurez-vous que le chemin est correct
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Logout() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}

export default Logout;
