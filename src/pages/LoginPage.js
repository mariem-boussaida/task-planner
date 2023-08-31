// LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../redux/actions/userActionCreators';

import './LoginPage.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        // Simulate a successful login
        if (username === 'user' && password === 'password') {
            dispatch(login({user: username}, 'the token goes here.'))
        }
    };

    return (
        <div className="login-page">
            <div className="login-form">
                <h2>Login</h2>
                <input
                    className="login-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
