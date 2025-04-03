// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./index.css";
// import Home from "./components/Home";


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
  
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>

        
//         {/* <Route path="/*" element={<Home />} /> */}
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import { BrowserRouter, Route, Routes, route } from "react-router-dom"
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import PrincingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/product/ProductPage';
import SupportPage from './landing_page/support/SupportPage';

import NotFound from './landing_page/NotFound';
import Login from './landing_page/login/Login';
import Home from "./components/Home";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <Navbar/> */}
   <Routes>
    <Route path="/" element={<HomePage/>} /> 
    <Route path="/signup" element={<Signup/>} /> 
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/pricing" element={<PrincingPage/>} /> 
    <Route path="/product" element={<ProductPage/>} /> 
    <Route path="/support" element={<SupportPage/>} /> 
    <Route path="/login" element={<Login/>} /> 
    <Route path="/dash/*" element={<Home />} />
    <Route path="*" element={<NotFound/>} /> 


   </Routes>
   {/* <Footer/> */}
  </BrowserRouter>
);

