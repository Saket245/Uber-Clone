import React from 'react';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SquareIcon from '@mui/icons-material/Square';
import { yellow } from '@mui/material/colors';

const ConfirmRidePopUp = (props) => {
  return (  <>
    <ArrowBackIcon
  id="btnBackVehicle"
  style={{ marginTop: "-20px", marginLeft: "-12px" }}
  onClick={(e) => {
  props.setRidePopUpPanel(false);
  }}
/>
<h3 className="mt-3 mb-4">Confirm this ride to start</h3>
<div className="w-100 d-flex align-items-center justify-content-between mb-4 mt-4 p-3" style={{borderRadius:"30px", backgroundColor:yellow[500]}}>
  <div className='d-flex align-items-center gap-2'>
  <img
      style={{ height: "40px", width: "40px", borderRadius:"50%" }}
      src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
      alt="car logo"
    />
    <h4>Harsh Patel</h4>
  </div>
  <div>
    <h5 className='mb-0'>2.2 KM</h5>
    
  </div>
  </div>
<div className="w-100 d-flex justify-content-center align-items-center flex-column gap-2">
 
  <div className="w-100">
    <div className="d-flex align-items-center w-100 p-2 gap-3" style={{borderBottom:"1px solid grey"}}>            
      <div className="loactionIconRide d-flex justify-content-center align-items-center">
        <LocationOnIcon />
      </div>
      <div>
          <h4 className="mb-0">562/11-A</h4>
          <p className="mb-0">Kankariya Talab, Ahmedabad</p>
      </div>
    </div>
    
    <div className="d-flex align-items-center w-100 p-2 gap-3" style={{borderBottom:"1px solid grey"}}>            
      <div className="loactionIconRide d-flex justify-content-center align-items-center">
        <SquareIcon />
      </div>
      <div>
          <h4 className="mb-0">562/11-A</h4>
          <p className="mb-0">Kankariya Talab, Ahmedabad</p>
      </div>
    </div>
    
    <div className="d-flex align-items-center w-100 p-2 gap-3">            
      <div className="loactionIconRide d-flex justify-content-center align-items-center">
        <MonetizationOnIcon />
      </div>
      <div>
          <h4 className="mb-0">$193.20</h4>
          <p className="mb-0">Cash Cash</p>
      </div>
    </div>
    
  </div>
  <button className="w-100 bg-success text-white rounded border-0 mt-2" style={{padding:"5px 0"}} onClick={()=>{}}>
    Confirm
  </button>
  <button className="w-100 text-white rounded border-0 mt-2" style={{padding:"5px 0", backgroundColor:"red"}} onClick={()=>{props.setRidePopUpPanel(false);props.setConfirmRidePopUpPanel(false);}}>
    Cancel
  </button>
</div>
</>
);
}

export default ConfirmRidePopUp