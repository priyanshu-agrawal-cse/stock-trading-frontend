// import React from 'react'
// import Footer from '../Footer';

// function Signup() {
//     return (
//         <>
//        <h1>SignUp</h1>
//         </>
//      );
// }

// export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        try {
            const response = await axios.post('https://stock-trading-backend-1.onrender.com/signup', formData);
            // console.log(response.data);
            document.cookie = `token=${response.data.token}; path=/`;
            alert('Signup successful!');
            navigate('/dash');
        } catch (error) {
            console.error(error);
            alert('Error occurred while signing up.');
        }
    };

    return (
        <div className="signup-container">
            <h1 className="signup-header">Sign Up</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Choose a username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;