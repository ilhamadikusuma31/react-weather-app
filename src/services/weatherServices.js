import { DateTime } from "luxon";

const API_KEY = "a13ba20d5a0379e31184192627f012ca"
const BASE_URL = "https://api.openweathermap.org/data/2.5"


//ini link kalo misalkeun mau sekali panggil
// https://api.openweathermap.org/data/2.5/onecall?
// lat={lat}&lon={lon}&exclude={part}&appid={API key}

//note:
//fetch(sumberData).then(dapetinRespon)

const getDataCuaca = (infoTipe, params) => {
    const url = new URL(BASE_URL + "/" + infoTipe);
    url.search = new URLSearchParams({...params, appid: API_KEY})
    return fetch(url).then((res)=>res.json());
    
}

//data yg diminta user convert/tempeli ke dict dengan key:value sesuai di public api
const formatCuacaSekarang = (data) => {
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


//ngambil 5 data prakiraan cuaca di salah satu kota
const formatPrakiraanCuaca = (data)=>{
    let {timezone, daily, hourly } = data;

    //daily[0] data sekarang, daily[1:6] data 5 hari kedepan
    daily = daily.slice(1,6).map(d=>{
        return{
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp : d.temp.day,
            icon : d.weather[0].icon
        }
    });

    hourly = hourly.slice(1,6).map(h=>{
        return{
            title: formatToLocalTime(h.dt, timezone, 'hh:mm a'),
            temp : h.temp,
            icon : h.weather[0].icon
        }
    });

    return {timezone, daily ,hourly}
}

const getFormattedWeatherData = async (params) =>{

    const penampung = await getDataCuaca('weather',params).then(d =>formatCuacaSekarang(d))
    const {lat,lon} = penampung

    // misal
    // https://api.openweathermap.org/data/2.5/onecall?lat=-6.8694&lon=109.1402&exclude=current&appid=0f252add29bc72d4d44556fc579a6f6c
    const penampung2 = await getDataCuaca('onecall', {
        lat,
        lon,
        exclude : "current, minutely, alerts",
        units : params.units,
    }).then(d => formatPrakiraanCuaca(d))
    
    // nb: penampung = cuaca di kota x
    //     penampung2 = prakiraan cuaca di kota x selama 


    return {...penampung, ...penampung2}
}


const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
)=> DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData 
export {formatToLocalTime, iconUrl}