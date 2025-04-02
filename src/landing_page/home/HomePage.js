import React from 'react'
import Hero from './Hero'
import Pricing from './Pricing'
import Stats from './Stats'
import Awards from './Awards'
import Education from './Education'
import OPenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'

function HomePage() {
    return (
        <>
        <Navbar/>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OPenAccount />
        <Footer/>

        
        </>
     );
}

export default HomePage;