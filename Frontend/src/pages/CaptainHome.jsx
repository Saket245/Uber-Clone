import React from 'react'
import { Link } from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import map from "../Images/map.jpg";
import LogoutIcon from '@mui/icons-material/Logout';
import uberLogo from "../Images/uberLogo.png";
import SpeedIcon from '@mui/icons-material/Speed';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';

const CaptainHome = () => {
  return (
    <>
    <div className="h-100">
    <div className='position-fixed d-flex justify-content-between align-items-center w-100 p-2'>
    <img
              className="logo"
              src={uberLogo}
              alt="logo"
            />
    <Link className="bg-white d-flex justify-content-center align-items-center" style={{height:"50px", width:"50px", border:"0", borderRadius:"50px"}}><LogoutIcon style={{color:"black"}}/></Link>
    </div>
      <div style={{height:"65vh"}}>
        <img
          style={{ height: "65vh", width: "100vw" }}
          src={map}
          alt="map"
          className="object-fit-sm-cover"
        />
      </div>

      <div style={{height:"35vh"}} className="w-100 d-flex justify-content-center align-items-center flex-column gap-2 p-3" >
        <div className="w-100 d-flex align-items-center justify-content-between mb-2">
        <div className='d-flex align-items-center gap-2'>
        <img
            style={{ height: "40px", width: "40px", borderRadius:"50%" }}
            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            alt="car logo"
          />
          <h4>Harsh Patel</h4>
        </div>
        <div>
          <h5 className='mb-0'>$295.20</h5>
          <p className='mb-0'>Earned</p>
        </div>
        </div>

        <div className="w-100 d-flex align-items-center justify-content-between mt-2 p-2" style={{backgroundColor:"#f4f4f4"}}>
          <div className='d-flex flex-column align-items-center justify-content-center gap-1'>
            <AccessTimeIcon/>
            <h5 className='mb-0'>10.2</h5>
            <p className='mb-0'>Hours Online</p>
          </div>
          <div className='d-flex flex-column align-items-center justify-content-center gap-1'>
            <SpeedIcon/>
            <h5 className='mb-0'>10.2</h5>
            <p className='mb-0'>Hours Online</p>
          </div>
          <div className='d-flex flex-column align-items-center justify-content-center gap-1'>
            <StickyNote2OutlinedIcon/>
            <h5 className='mb-0'>10.2</h5>
            <p className='mb-0'>Hours Online</p>
          </div>
        </div>
      
      </div>

    
    </div>
  </>
  )
}

export default CaptainHome