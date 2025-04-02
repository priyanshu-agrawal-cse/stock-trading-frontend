import React from 'react'

function Awards() {
    return (
        // <div className='container mt-5'>
        <div className=''>

            <div className='row'>
                <div className='col-lg-6 col-sm-12 mt-3'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-lg-6 col-sm-12 p-5 '>
                    <h1>Aim to become Largest stock broker in india</h1>
                    <h5>You can come and invest in following things on our platform</h5>
                    <div className='row mt-5'>
                        <div className='col-lg-6 col-sm-12'>
                            <ul>
                                <li><p>Future and option</p></li>
                                <li><p>Commodity derivative</p></li>
                                <li><p>Currency derivative</p></li>

                            </ul>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <ul>
                                <li><p>stocks and IPOs </p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>

                            </ul>
                        </div>
                        <img src='media/images/PressLogos.png' style={{width: "90%"}} />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;