import React from 'react'

function Pricing() {
    return (
        // <div className='container'>
        <div className=''>

            <div className='row'>
                <div className='col-lg-4 text-center sm-col-12'>
                    <h1>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='mx-3' style={{ textDecoration: "none" }}>See pricing<i class="fa-solid fa-arrow-right"></i></a>

                </div>
                <div className='col-2'></div>
                <div className='col-lg-6 sm-col-12 mt-3'>
                    <div className='row text-center'>
                        <div className='col p-4 border' style={{height:"12rem"}}>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery <br></br>
                                and direct mutual funds</p>
                        </div>
                        <div className='col p-4 border mb-5' style={{height:"12rem"}}>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and
                                F&O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;