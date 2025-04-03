import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SquareIcon from "@mui/icons-material/Square";
import map from "../Images/map.jpg";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <>
      <div className="h-100">
      <Link to="/home" className="position-fixed bg-white d-flex justify-content-center align-items-center" style={{height:"50px", width:"50px", border:"0", borderRadius:"50px", right:"8px", top:"8px"}}><HomeIcon style={{color:"black"}}/></Link>
        <div className="h-50">
          <img
            style={{ height: "50vh", width: "100vw" }}
            src={map}
            alt="map"
            className="object-fit-sm-cover"
          />
        </div>

        <div className="w-100 h-50 d-flex justify-content-center align-items-center flex-column gap-2 p-3">
          <div className="w-100 d-flex align-items-center justify-content-between mb-2">
            <img
              style={{ height: "80px", width: "100px" }}
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
              alt="car logo"
            />
            <div>
              <h4 className="mb-0">Sarthak</h4>
              <h3 className="mb-0">GJ04 EQ 6898</h3>
              <p className="mb-0">Maruti Suzuki Alto</p>
            </div>
          </div>

          <div className="w-100">
            <div
              className="d-flex align-items-center w-100 p-2 gap-3"
              style={{ borderBottom: "1px solid grey" }}
            >
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
         
        <button className="w-100 bg-success text-white rounded border-0 mt-2" style={{padding:"5px 0"}}>
          Make Payment
        </button>
        
        </div>

      
      </div>
    </>
  );
};

export default Riding;
