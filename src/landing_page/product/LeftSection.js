import React from 'react'

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appleStore }) {
    return (
        // <div className='container' >
        <div className=''>
            <div className='row ' >
                <div className='col-lg-6 sm-col-12 p-5'>
                    <img src={imageURL} style={{width:"30rem"}}/>
                </div>
                <div className='col-lg-6 sm-col-12 text-left mt-5 p-5 '>
                    <h1 className='fs-2'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mt-3'>
                    <a href={tryDemo} className='mx-3' style={{ textDecoration: "none" }}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} className='mx-3' style={{ textDecoration: "none" }}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-4'>
                    <a href={googlePlay} className='mx-3'><img src='media/images/googlePlayBadge.svg' /></a>
                    <a href={appleStore} className='mx-3'><img src='media/images/appstoreBadge.svg' /></a>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default LeftSection;