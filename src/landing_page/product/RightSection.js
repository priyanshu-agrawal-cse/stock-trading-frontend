import React from 'react'

function RightSection({imageURL, productName, productDescription,learnMore}) {
    return (
        // <div className='container' >
        <div className=''>
        <div className='row ' >

            <div className='col-lg-6 sm-col-12 text-left mt-5 p-5 '>
                <h1 className='fs-2 mt-5'>{productName}</h1>
                <p>{productDescription}</p>
                <div className='mt-3'>
                <a href={learnMore} className='mx-3' style={{ textDecoration: "none" }}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                </div>


            </div>
            <div className='col-lg-6 sm-col-12 p-5 mb-5'>
                <img src={imageURL} style={{width:"30rem"}}/>
            </div>
        </div>

    </div>
     );
}

export default RightSection;