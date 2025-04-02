// import React from 'react'

// function OpenAccount() {
//     return (
//         // <div className='container p-5 mb-5'>
//         <div className=''>
//         <div className='row text-center'>
            
//             <h1 className='mt-5'>Open a Zerodha account</h1>
//             <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades</p>
//             <button className='p-2 btn btn-primary fs-5 mb-5' style={{width :"15rem" , margin : "0 auto"}}>Sign Up for free</button>
//         </div>
//      </div>
//      );
// }

// export default OpenAccount;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();

    return (
        <div className=''>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades</p>
                <button 
                    className='p-2 btn btn-primary fs-5 mb-5' 
                    style={{width: "15rem", margin: "0 auto"}} 
                    onClick={() => navigate('/signup')}
                >
                    Sign Up for free
                </button>
            </div>
        </div>
    );
}

export default OpenAccount;