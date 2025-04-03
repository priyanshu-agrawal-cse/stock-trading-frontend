import React from 'react'
import Hero from './Hero'
import Pricing from './Pricing'
import Stats from './Stats'
import Awards from './Awards'
import Education from './Education'
import OpenAccount from 'landing_page/OpenAccount'
import Navbar from 'landing_page/Navbar'
import Footer from 'landing_page/Footer'

function HomePage() {
    return (
        <>
        <Navbar/>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer/>

        
        </>
     );
}

export default HomePage;