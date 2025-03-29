import React, { useEffect, useRef, useState } from "react";
import uberLogo from "../Images/uberLogo.png";
import map from "../Images/map.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationSearchPanel from "../components/LocationSearchPanel";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import VehiclePanel from "../components/VehiclePanel";

const Home = () => {
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [showContentPanel,setShowContentPanel] = useState(true);

  useEffect(() => {
    // Wait for the component to be rendered and then add event listener
    const addPickupInput = document.getElementById("addPickup");
    const addDestinationInput = document.getElementById("addDestination");
    if (addPickupInput || addDestinationInput) {
      const focusHandler = () => {
        let bottomDiv = document.getElementById("bottomDiv");
        bottomDiv.classList.remove("visually-hidden");

        let btnBack = document.getElementById("btnBack");
        btnBack.classList.remove("d-none");

        let locationContent = document.getElementById("locationContent");
        locationContent.classList.add("h-100");

        btnBack.addEventListener("click", () => {
          bottomDiv.classList.add("visually-hidden");
          btnBack.classList.add("d-none");
          locationContent.classList.remove("h-100");
        });
      };

      addPickupInput.addEventListener("focus", focusHandler);
      addDestinationInput.addEventListener("focus", focusHandler);

      return () => {
        if (addPickupInput || addDestinationInput) {
          addDestinationInput.removeEventListener("focus", focusHandler);
          addPickupInput.removeEventListener("focus", focusHandler);

        }
      };
    }
  }, [vehiclePanel,showContentPanel]);

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const vehiclePanelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  
  useGSAP(function(){
    if(vehiclePanel){
      setShowContentPanel(false);
      gsap.to(vehiclePanelRef.current,{
        transform:"translateY(0)",      
      })
    }
    else{
      setShowContentPanel(true);
      gsap.to(vehiclePanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[vehiclePanel])

  return (
    <div>
      <div>
        <img
          className="logo"
          style={{ position: "absolute", top: 5, left: 5 }}
          src={uberLogo}
          alt="logo"
        />
      </div>

      <div>
        <img
          style={{ height: "100vh", width: "100vw" }}
          src={map}
          alt="map"
          className="object-fit-sm-cover"
        />
      </div>

      {showContentPanel && 
      <>
      <div
        id="locationContent"
        className="bg-white position-absolute bottom-0 w-100 d-flex flex-column justify-content-end"
      >
        <div className="bg-white p-5" style={{ height: "30%" }}>
            <ArrowBackIcon id="btnBack"
            className="position-absolute top-0 d-none"
            style={{ marginLeft: "-45px", marginTop: "8px" }}/>      
          <h4 style={{ marginLeft: "-8px", fontWeight: "bold" }}>
            Find a trip
          </h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div
              className="position-absolute rounded"
              style={{
                backgroundColor: "#272424",
                height: "60px",
                left: "58px",
                top: "100px",
              }}
            >
              |
            </div>
            <input
              id="addPickup"
              type="text"
              className="px-3 py-2 rounded mb-2 w-100"
              style={{ backgroundColor: "#eee", border:"0" }}
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              id="addDestination"
              type="text"
              className="px-3 py-2 rounded w-100"
              style={{ backgroundColor: "#eee", border:"0" }}
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>
        <div
          id="bottomDiv"
          className="p-3 visually-hidden bg-white"
          style={{ height: "70%" }}
        >
          <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      </>}
      
      <div ref={vehiclePanelRef} className="w-100 position-fixed bottom-0 z-3 bg-white p-3">
      
       <VehiclePanel setVehiclePanel={setVehiclePanel} setShowContentPanel={setShowContentPanel}/>

      </div>
    </div>
  );
};

export default Home;
