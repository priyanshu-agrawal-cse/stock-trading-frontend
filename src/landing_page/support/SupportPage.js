import React from 'react'

import Hero from './Hero';
import CreateTiket from './CreateTiket';
import Navbar from 'landing_page/Navbar'
import Footer from 'landing_page/Footer'


function SupportPage() {
    return (
        <>
        <Navbar />
        <Hero />
        <CreateTiket />
      <Footer />
        
        </>
     );
}

export default SupportPage;