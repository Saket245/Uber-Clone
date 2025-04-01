import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';

const VehiclePanel = (props) => {
  return (
    <>
        <ArrowBackIcon id="btnBackVehicle"
            style={{marginTop:"-20px", marginLeft:"-12px" }} onClick={(e)=>{props.setVehiclePanel(false);props.setShowContentPanel(true)}}/>  
      <h3 className="mb-3">Choose a vehicle</h3>
      <div onClick={()=>props.setConfirmRidePanel(true)} className="d-flex justify-content-between align-items-center w-100 p-2" style={{border:"2px solid black", borderRadius:"10px"}}>
      <img className="" style={{height:"50px", width:"70px"}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="car logo"/>
      <div className="w-50">
        <h5 className="mb-0">UberGo <span className=""><PersonIcon/> 4</span></h5>
        <h6 className="mb-0">2 mins away</h6>
        <p className="mb-0" style={{fontSize:"15px"}}>Affordable, compact rides</p>
      </div> 
      <h3>$193.20</h3>
      </div>
       
      <div onClick={()=>props.setConfirmRidePanel(true)} className="d-flex justify-content-between align-items-center w-100 p-2 mt-2" style={{border:"2px solid black", borderRadius:"10px"}}>
      <img className="" style={{height:"50px", width:"70px"}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="car logo"/>
      <div className="w-50">
        <h5 className="mb-0">Moto <span className=""><PersonIcon/> 1</span></h5>
        <h6 className="mb-0">3 mins away</h6>
        <p className="mb-0" style={{fontSize:"15px"}}>Affordable, motocycle rides</p>
      </div> 
      <h3>$65</h3>
      </div>
       
      <div onClick={()=>props.setConfirmRidePanel(true)} className="d-flex justify-content-between align-items-center w-100 p-2 mt-2" style={{border:"2px solid black", borderRadius:"10px"}}>
      <img className="" style={{height:"50px", width:"70px"}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car logo"/>
      <div className="w-50">
        <h5 className="mb-0">UberAuto <span className=""><PersonIcon/> 3</span></h5>
        <h6 className="mb-0">3 mins away</h6>
        <p className="mb-0" style={{fontSize:"15px"}}>Affordable, Auto rides</p>
      </div> 
      <h3>$118.86</h3>
      </div>
    </>
  )
}

export default VehiclePanel