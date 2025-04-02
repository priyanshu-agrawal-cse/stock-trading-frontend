// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css';
// import { Link } from "react-router-dom";


// function Login() {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         const response = await axios.post('http://localhost:3002/login', formData);
//     //         console.log(response.data);
//     //         alert('Login successful!');
//     //         window.location.href = 'http://localhost:3001/';

//     //     } catch (error) {
//     //         console.error(error);
//     //         alert('Error occurred during login.');
//     //     }
//     // };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:3002/login", formData, {
//                 withCredentials: true,
//               });
//             console.log(response.data); // Debugging: Check the response structure
    
//             if (response.data.success) {
//                 // If login is successful
//                 alert('Login successful!');
//                <Link style={{textDecoration:"none"}} to="/dash" ></Link>
//                          // Redirect to the home page
//             } else {
//                 // If login fails
//                 alert('Login failed. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error during login:', error);
//             alert('An error occurred. Please try again.');
//         }
//     };
//     return (
//         <div className="login-container">
//             <h1 className="login-header">Login</h1>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         placeholder="Enter your password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="login-button">Login</button>
//             </form>
//         </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://stock-trading-backend-1.onrender.com/login', formData, { withCredentials: true });

            if (response.data.success) {
                document.cookie = `token=${response.data.token}; path=/`; // Store auth token in cookie
                alert('Login successful!');
                navigate('/dash'); // Redirect to /dash after login
            } else {
                alert('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-header">Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="login-button">Login</button>
                <br />
            </form>
            <button type="submit" className="login-button" onClick={()=>{navigate('/signup')}}>register</button>
        </div>
    );
}

export default Login;