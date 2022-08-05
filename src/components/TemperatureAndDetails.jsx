import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
}from "@iconscout/react-unicons"
import { formatToLocalTime, iconUrl } from '../services/weatherServices'

function TemperatureAndDetails({cuaca:{details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone}}) {
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            {details}
        </div>

        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src={iconUrl(icon)} className="w-20"/>
            <p className="text-5xl">{temp.toFixed()}°</p>
            <div className="flex flex-col space-y-2">

                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1"/>
                    Terasa Seperti
                    <span className="font-medium ml-1">{feels_like.toFixed()}°</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1"/>
                    Kelembaban
                    <span className="font-medium ml-1">{humidity.toFixed()} %</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1"/>
                    Angin
                    <span className="font-medium ml-1">{speed.toFixed()} km/jam</span>
                </div>
            </div>
        </div>


        <div className="flex flex-row items-center justify-center space-x-3 text-white text-sm py-3">
            <UilSun/>
            <p className="font-light">
                Terbit: <span className="font-medium">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
            </p>
            <p className="font-light">|</p>
            <UilSunset/>
            <p className="font-light">
                Terbenam: <span className="font-medium">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
            </p>
            <p className="font-light">|</p>
            <UilArrowUp/>
            <p className="font-light">
                Tetinggi: <span className="font-medium">{temp_max.toFixed()}</span>
            </p>
            <p className="font-light">|</p>
            <UilArrowDown/>
            <p className="font-light">
                Terendah: <span className="font-medium">{temp_min.toFixed()}</span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails