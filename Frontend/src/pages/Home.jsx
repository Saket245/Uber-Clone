import React, { useEffect, useRef, useState } from "react";
import uberLogo from "../Images/uberLogo.png";
import map from "../Images/map.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationSearchPanel from "../components/LocationSearchPanel";
import PersonIcon from '@mui/icons-material/Person';
import {useGSAP} from "@gsap/react"
import gsap from "gsap";

const Home = () => {
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
  }, []);

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  
  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:"translateY(0)",      
      })
    }
    else{
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

      <div ref={vehiclePanelRef} className="w-100 position-fixed bottom-0 z-3 bg-white p-3">
      <h3 className="mb-3">Choose a vehicle</h3>
      <div className="d-flex justify-content-between align-items-center w-100 p-2" style={{border:"2px solid black", borderRadius:"10px"}}>
      <img className="" style={{height:"50px", width:"70px"}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="car logo"/>
      <div className="w-50">
        <h5 className="mb-0">UberGo <span className=""><PersonIcon/> 4</span></h5>
        <h6 className="mb-0">2 mins away</h6>
        <p className="mb-0" style={{fontSize:"15px"}}>Affordable, compact rides</p>
      </div> 
      <h3>$193.20</h3>
      </div>
       
      <div className="d-flex justify-content-between align-items-center w-100 p-2 mt-2" style={{border:"2px solid black", borderRadius:"10px"}}>
      <img className="" style={{height:"50px", width:"70px"}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="car logo"/>
      <div className="w-50">
        <h5 className="mb-0">Moto <span className=""><PersonIcon/> 1</span></h5>
        <h6 className="mb-0">3 mins away</h6>
        <p className="mb-0" style={{fontSize:"15px"}}>Affordable, motocycle rides</p>
      </div> 
      <h3>$65</h3>
      </div>
       
      <div className="d-flex justify-content-between align-items-center w-100 p-2 mt-2" style={{border:"2px solid black", borderRadius:"10px"}}>
      <img className="" style={{height:"50px", width:"70px"}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car logo"/>
      <div className="w-50">
        <h5 className="mb-0">UberAuto <span className=""><PersonIcon/> 3</span></h5>
        <h6 className="mb-0">3 mins away</h6>
        <p className="mb-0" style={{fontSize:"15px"}}>Affordable, Auto rides</p>
      </div> 
      <h3>$118.86</h3>
      </div>
       
      </div>
    </div>
  );
};

export default Home;
