import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SquareIcon from '@mui/icons-material/Square';

const WaitingForDriver = (props) => {
  return (
    <>
    <ArrowBackIcon
      id="btnBackVehicle"
      style={{ marginTop: "-20px", marginLeft: "-12px" }}
      onClick={(e) => {
        props.setWaitingForDriver(false);
        props.setShowContentPanel(true);
        props.setVehiclePanel(false);
      }}
    />
    <div className="w-100 d-flex justify-content-center align-items-center flex-column gap-2">
    <div className='w-100 d-flex align-items-center justify-content-between'>
    <img
        style={{ height: "80px", width: "100px" }}
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
        alt="car logo"
      />
      <div>
        <h4 className='mb-0'>Sarthak</h4>
        <h3 className='mb-0'>GJ04 EQ 6898</h3>
        <p className='mb-0'>Maruti Suzuki Alto</p>
      </div>
    </div>
     
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
    </div>
  </>
  )
}

export default WaitingForDriver