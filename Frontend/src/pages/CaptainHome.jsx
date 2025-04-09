import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import map from "../Images/map.jpg";
import LogoutIcon from "@mui/icons-material/Logout";
import uberLogo from "../Images/uberLogo.png";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [ConfirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const ConfirmRidePopUpPanelRef = useRef(null);

  useGSAP(  
    function () {
      if (ridePopUpPanel) {    
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );

  useGSAP(  
    function () {
      if (ConfirmRidePopUpPanel) {    
        gsap.to(ConfirmRidePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ConfirmRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ConfirmRidePopUpPanel]
  );

  return (
    <>
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

        <CaptainDetails />
        <div ref={ridePopUpPanelRef} className="w-100 position-fixed bottom-0 z-3 bg-white p-3"><RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/></div>
        <div ref={ConfirmRidePopUpPanelRef} className="w-100 position-fixed bottom-0 z-3 bg-white p-3 h-100"><ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/></div>
      </div>
    </>
  );
};

export default CaptainHome;
