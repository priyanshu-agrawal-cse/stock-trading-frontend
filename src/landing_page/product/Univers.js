import React from 'react'

function Univers() {
    return (
        // <div className='container mt-5' >
        <div className=''>
            <div className='row text-center mt-5' >
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-lg-4 sm-col-12 p-5 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" style={{ width: "10rem" }} />
                    <p className='text-small text-mutted mt-3' >Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-lg-4 sm-col-12 p-5 mt-5'>
                    <img src="media\images\sensibullLogo.svg" style={{ width: "10rem" }} />
                    <p className='text-small text-mutted mt-3' >Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-lg-4 sm-col-12 p-5 mt-5'>
                    <img src="media\images\goldenpiLogo.png" style={{ width: "10rem" }} />
                    <p className='text-small text-mutted mt-3' >Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className='col-lg-4 sm-col-12 p-5 mb-4'>
                    <img src="media\images\streakLogo.png" style={{ width: "10rem" }} />
                    <p className='text-small text-mutted mt-3' >Systematic trading platform
                        that allows you to create and backtest stragically without coding.</p>
                </div>
                <div className='col-lg-4 sm-col-12 p-5 mb-4'>
                    <img src="media/images/smallcaseLogo.png" style={{ width: "10rem" }} />
                    <p className='text-small text-mutted mt-3' >Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col-lg-4 sm-col-12 p-5 mb-4'>
                    <img src="media\images\dittoLogo.png" style={{ width: "10rem" }} />
                    <p className='text-small text-mutted mt-3' >Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width :"15rem" , margin : "0 auto"}}>Sign Up for free</button>
            </div>

        </div>
    );
}

export default Univers;