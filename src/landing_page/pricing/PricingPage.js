import React from 'react'

import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from 'landing_page/OpenAccount'
import Navbar from 'landing_page/Navbar'
import Footer from 'landing_page/Footer'

function PrincingPage() {
    return (
       <>
       <Navbar />
       <Hero />
      
       <OpenAccount />
       <Brokerage />
      <Footer />
      
       </>
       
     );
}

export default PrincingPage;