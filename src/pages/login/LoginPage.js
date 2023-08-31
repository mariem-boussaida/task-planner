// LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';
import {Link} from "react-router-dom";
import axios from "axios";
import {login} from "../../redux/actions/userActionCreators";
import {useDispatch} from "react-redux";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            dispatch(login({user: email}, token))
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Invalid credentials');
        }
    };

    return (
            <div className="login-form">
                <form>
                <h2>Login</h2>
                <input
                    className="login-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={handleSubmit}>
                    Login
                </button>
                </form>
                <p className="mt-2" style={{ color: 'red' }}>{errorMessage}</p>
                <p className="mt-2">Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
    );
}

export default LoginPage;
