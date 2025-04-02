import React from 'react'

function Hero() {
    return (
        // <div className='container' >
        <div className=''>

            <div className='row p-5 mt-5  '>
                <div className='col-lg-4 text-center sm-col-12 mt-5'>
                    <img src='media\images\pricingEquity.svg' style={{ width: "22rem" }} />
                    <h1 className='fs-3' >Free equity delivery</h1>
                    <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-lg-4 text-center sm-col-12 mt-5 ml-2'>
                    <img src='media\images\intradayTrades.svg' style={{ width: "22rem" }} />
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-lg-4 text-center sm-col-12 mt-5'>
                    <img src='media\images\pricingEquity.svg' style={{ width: "22rem" }} />
                    <h1 className='fs-3' >Free direct MF</h1>
                    <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>
    );
}

export default Hero;