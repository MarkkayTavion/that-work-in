import React from 'react';
import AFAAA from "../assets/images/png-transparent-nasm-afaa-principles-of-group-fitness-instruction-aerobics-and-fitness-association-of-america-logo-physical-fitness-national-academy-of-sports-medicine-flatiron-blue-physical-fitness-t.png"
import NASM from "../assets/images/NASM+Provider+Logo.png"
import ACE from "../assets/images/ace-removebg-preview.png"


const HeroBanner = () => (

  <div className='hero-container'>
    <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="weights" className="main-image" />
    <h2 className='get-that-work'>GET THAT WORK!</h2>
      <div className='text-container'>
        <h3 className='we-do'>We <span className='green'>Do,</span>  We <span className='green'>Sweat,</span>  We <span className='green'>Love.</span></h3>
      </div>
      <div className='fitness-container'>
        <img className='fitness' src={AFAAA} alt ="logo" />
        <img className='fitness' src={NASM} alt="logo" />
        <img className='fitness' src={ACE} alt="logo" />
      </div>
  </div>

);

export default HeroBanner;