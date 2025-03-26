import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const LocationSearchPanel = (props) => {

  const locations = [
    "Plot no. 15/B, Hariram Society, Subhashnagar, Bhavnagar",
    "Plot no. 13/A, Rubber Society, Subhashnagar, Bhavnagar",
    "Plot no. 11/D, Dharmaraj Society, Kaliyabid, Bhavnagar",
    "Plot no. 2/A, Sardar Society, Chitra, Bhavnagar",
  ]
 
  return (
    <div>
    {
      locations.map((item,index)=>{
        return(
        <div onClick={() => { props.setVehiclePanel(true); }} className='d-flex gap-2 mb-4' key={index}>
     <div className='loactionIcon d-flex justify-content-center align-items-center'>
     <LocationOnIcon />
     </div>
     
      <h6>{item}</h6>
     </div>
        )
      })

    }
    </div>
  )
}

export default LocationSearchPanel