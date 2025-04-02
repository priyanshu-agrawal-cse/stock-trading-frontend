import React from 'react'

function Brokerage() {
    return (
        // <div className='container' >
        <div className=''>
            <div className='row p-5 mt-5 border-top text-center'>
                <div className='col-lg-8 text-center sm-col-8 p-4' >
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokeage calculater</h3></a>
                    <ul style={{textAlign:"left", lineHeight:"3rem"}}>
                        <li>Online account</li>
                        <li>Offline account</li>
                        <li>NRI account (offline only)</li>
                        <li>Partnership, LLP, HUF, or Corporate accounts (offline only)</li>
                    </ul>
                </div>
                <div className='col-lg-4 text-center sm-col-4 p-4' >
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                    <ul style={{ lineHeight:"3rem" , listStyleType: "none"}}>
                        <li>FREE</li>
                        <li>FREE</li>
                        <li>500</li>
                        <li>500</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Brokerage;