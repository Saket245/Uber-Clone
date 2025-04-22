import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import map from "../Images/map.jpg";
import LogoutIcon from "@mui/icons-material/Logout";
import uberLogo from "../Images/uberLogo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

    const [FinishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

     useGSAP(  
        function () {
          if (FinishRidePanel) {    
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(0)",
            });
          } else {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [FinishRidePanel]
      );
    

  return (
    <div className="h-100">
    <div className="position-fixed d-flex justify-content-between align-items-center w-100 p-2">
      <img className="logo" src={uberLogo} alt="logo" />
      <Link
        className="bg-white d-flex justify-content-center align-items-center"
        style={{
          height: "50px",
          width: "50px",
          border: "0",
          borderRadius: "50px",
        }}
      >
        <LogoutIcon style={{ color: "black" }} />
      </Link>
    </div>
    <div style={{ height: "65vh" }}>
      <img
        style={{ height: "65vh", width: "100vw" }}
        src={map}
        alt="map"
        className="object-fit-sm-cover"
      />
    </div>

    <div onClick={()=>setFinishRidePanel(true)} className='d-flex justify-content-evenly align-items-center'  style={{ height: "35vh", backgroundColor:"yellow" }}>
    <ArrowBackIcon
        id="btnBackVehicle"
        style={{ marginTop: "-190px", marginLeft: "-12px" }}
        onClick={(e) => {
    
        }}
      />
        <h4 className='mb-0'>4KM away</h4>
        <button className="w-50 bg-success text-white rounded border-0 mt-2" style={{padding:"5px 0"}}>
          Accept
        </button>
    </div>

    <div ref={finishRidePanelRef} className="w-100 position-fixed bottom-0 z-3 bg-white p-3"><FinishRide setFinishRidePanel={setFinishRidePanel}/></div>
    
  </div>
  )
}

export default CaptainRiding