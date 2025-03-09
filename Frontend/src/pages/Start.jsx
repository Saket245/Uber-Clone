import React from 'react';
import uberLogo from '../Images/uberLogo.png';
import bgImage from '../Images/uberBackground.jpg';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='homeContent mt-0' style={{backgroundImage: `url(${bgImage})`,height: '100vh',backgroundSize: 'cover',backgroundPosition: 'center'}}>
      <div className="logo">
        <img 
          className='logo'
          src={uberLogo}
          alt="logo" />
      </div>
      <div className="bottomContent bg-white w-100 bottom-0 position-fixed d-flex flex-column justify-content-center align-items-center">
        <p className='pt-2' style={{fontSize:"23px",fontWeight:"bold"}}>Get Started with Uber</p>
        <Link to="/login" className="btn btn-black mb-3" style={{backgroundColor:"black",color:"white"}}>Continue</Link>
      </div>
    </div>
  )
}

export default Start;