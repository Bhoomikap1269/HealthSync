import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaArrowLeft } from 'react-icons/fa';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // Perform form validation
        const newErrors = {};
        if (username.trim() === '') {
            newErrors.username = 'Username is required';
        }
        if (password.trim() === '') {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        // If there are no errors, proceed with login
        if (Object.keys(newErrors).length === 0) {
            // Handle login (e.g., sending data to an API)
            console.log('Logging in:', { username, password });

            // Navigate to another page after successful login (if needed)
            navigate('/dashboard');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="username"><FaUser className="icon" /> Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password"><FaLock className="icon" /> Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit" className="submit-button">Login</button>
            </form>

            {/* Link to go back to the front page */}
            <p className="back-to-front">
                <a href="/" className="back-link"><FaArrowLeft className="icon" /> Back to Home Page</a>
            </p>
        </div>
    );
}

export default Login;
