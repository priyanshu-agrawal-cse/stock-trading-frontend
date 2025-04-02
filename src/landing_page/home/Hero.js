// import React from 'react'

// function Hero() {
//     return (
//     //  <div className='container p-5 mb-5'>
//     <div className=''>

//         <div className='row text-center'>
//             <img src='media/images/homeHero.png' alt='home hero image' className='mb-5' style={{width:"100%"}} />
//             <h1 className='mt-5'>Invest in your future</h1>
//             <p>Online platform to invest in stocks , derivatives , mutual funds and more</p>
//             <button className='p-2 btn btn-primary fs-5 mb-5' style={{width :"15rem" , margin : "0 auto"}}>Sign Up for free</button>
//         </div>
//      </div>
//      );
// }

// export default Hero;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className=''>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='home hero image' className='mb-5' style={{width:"100%"}} />
                <h1 className='mt-5'>Invest in your future</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
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

export default Hero;