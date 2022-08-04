const API_KEY = "0f252add29bc72d4d44556fc579a6f6c"
const BASE_URL = "https://api.openweathermap.org/data/2.5"


//ini link kalo misalkeun mau sekali panggil
// https://api.openweathermap.org/data/2.5/onecall?
// lat={lat}&lon={lon}&exclude={part}&appid={API key}

//note:
//fetch(sumberData).then(dapetinRespon)

const getWeatherData = (infoTipe, params) => {
    const url = new URL(BASE_URL + "/" + infoTipe);
    url.search = new URLSearchParams({...params, appid: API_KEY})
    return fetch(url).then((res)=>res.json());
    
}

//data yg diminta user convert/tempeli ke dict dengan key:value sesuai di public api
const formatCurrentWeather = (data) => {
    const {
        coord : {lat,lon},
        main : {temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        weather,
        wind : {speed},
        sys : {country, sunrise, sunset}

    } = data

    
    //wether yg di var data diambil main dan icon saja
    //nb: main diganti jadi details
    const {main:details,icon} = weather[0]

    return{lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,speed,country,sunrise, sunset,details,icon}
}

const getFormattedWeatherData = async (params) =>{

    const penampung = await getWeatherData('weather',params).then(d =>formatCurrentWeather(d))
    return penampung
}


export default getFormattedWeatherData 