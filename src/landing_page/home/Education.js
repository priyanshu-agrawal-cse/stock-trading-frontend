import React from 'react'

function Education() {
    return (
        // <div className='container mt-5 '>
        <div className=''>

            <div className='row mt-5'>
                <div className='col-lg-6 sm-col-12 '>
                    <img src='media/images/education.svg' style={{ width: "25rem" }} />

                </div>

                <div className='col-lg-6 text-center sm-col-12 mt-5'>
                    <h1 className='mb-5 mt-3 fs-2'>Free and open market education</h1>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world <br></br> covering everything from the basics to advanced trading.</p>
                    <a href='' className='mx-3' style={{ textDecoration: "none" }}>Varsity<i class="fa-solid fa-arrow-right"></i></a>
                    <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in <br></br> India for all your market related queries.</p>
                    <a href='' className='mx-3' style={{ textDecoration: "none" }}>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;