import axios from 'axios';
const config = {
    headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
}
const apiKeyStr = '&key=' + ''
const baseUrl = "https://maps.googleapis.com/maps/api/geocode/json"

function getAddress(lat, long) {
    let address = '';
    const latLongString = `?latlng=
    ${lat}, ${long}`
    axios.get(`${baseUrl}${latLongString}${apiKeyStr}`,
        { config }).then((res) => {
            const addressArray = res.data.results
            getBestAddressResult(addressArray)
            console.log({res: res })
            console.log({ resData: res.data })
            console.log({ resData0: res.data.results[0] })
        address = res.data.results
    })
    return address;
};

function getBestAddressResult(arr) {
    for (address in arr) {
        if (address.geometry.location_type === "ROOFTOP") {

        }

        "ROOFTOP" > "RANGE_INTERPOLATED"
        "RANGE_INTERPOLATED" > "GEOMETRIC_CENTER"
        "GEOMETRIC_CENTER" > "APPROXIMATE"
    }

    return arr[0]
}



export default {
    getAddress: getAddress,
}