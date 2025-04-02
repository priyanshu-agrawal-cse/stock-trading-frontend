import React from 'react'

import Hero from './Hero';
import Brokerage from './Brokerage';
import Navbar from '../../comp/Navbar'
import Navbar from '../../comp/Footer'
import OpenAccount from '../../comp/OpenAccount';

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