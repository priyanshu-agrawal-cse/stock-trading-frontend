import React from 'react'
import { Link } from 'react-router-dom';

function Team() {
    return (
        // <div className='container'>
        <div className=''>
            <div className='row p-5 mt-5 border-top '>
                <h1 className='text-center fs-2'>People</h1>
            </div>
            <div className='row p-5  text-muted ' style={{ lineHeight: "1.8rem", fontSize: "1.2rem" }}>
                <div className='col-lg-6 sm-col-12 p-5 text-center'>
                    <img src='media/images/myPhoto.jpg' alt='devloper ' style={{ width: "26rem", height: "26rem", borderRadius: "50%", overflow: "hidden", objectFit: "cover" }} />
                    <h4 className='mt-4' >Priyanshu Agrawal</h4>
                    <h6 className='mt-2'>Devloped by</h6>
                </div>
                <div className='col-lg-6 sm-col-12 p-5'>
                   <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                   <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                   <p> Playing basketball is his zen.</p>

                   <p> Connect on <Link to="/" style={{textDecoration:"none"}} >Homepage </Link> /  <a href='' style={{textDecoration:"none"}}>TradingQnA</a> /  <a href='' style={{textDecoration:"none"}}>Twitter</a></p>

                </div>
            </div>
        </div>
    );
}

export default Team;