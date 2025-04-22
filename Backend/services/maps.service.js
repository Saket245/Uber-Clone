const { default: axios } = require("axios");

module.exports.getAddressCoordinate = async (address)=>{
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
    try{
        const response = await axios.get(url);
        console.log(response);
        if(response.data.status === "OK"){
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
    }
    else{
        throw new Error("Unable to fetch coordinates for the given address.");
    }
}
catch(error){
    console.error("Error fetching coordinates:", error.message);
    throw error;
}
}