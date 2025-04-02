import React from 'react'

function Hero() {
    return (
        // <section className='container-fluid' id='supportHero'>
        <section className=''  id='supportHero'>
            <div className='p-5 m-5' id='supportWrap'>
                <h4 className='ml-5'>Support Portal</h4>
                <a href=''>Track tickets</a>
            </div>
            <div className='row p-3 '>
                <div className='col-lg-6 sm-col-12 p-5 '>
                    <h1 className='fs-3 mb-5'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='how do i activate my F&O' className='mb-5' /><br></br>
                    <a href=''className='mr-5 fs-3'>Track account opening</a>
                     <a href=''>Track segment activation</a>
                      <a href=''>Intraday margins</a>
                    <a href=''> Kite user manual</a>
                </div>
                <div className='col-lg-6 sm-col-12 p-5 '>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li className='mt-5 mb-5'><a href=''>Surveillance measure on scrips - March 2025</a></li>
                        <li><a href=''>Current Takeovers and Delisting – March 2025</a></li>
                    </ol>
                </div>
            </div>

        </section>
    );
}

export default Hero;