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

function TemperatureAndDetails() {
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            Berawan
        </div>

        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" className="w-20"/>
            <p className="text-5xl">34°</p>
            <div className="flex flex-col space-y-2">

                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1"/>
                    Terasa Seperti
                    <span className="font-medium ml-1">32°</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1"/>
                    Kelembaban
                    <span className="font-medium ml-1">65%</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1"/>
                    Angin
                    <span className="font-medium ml-1">16 km/jam</span>
                </div>
            </div>
        </div>


        <div className="flex flex-row items-center justify-center space-x-3 text-white text-sm py-3">
            <UilSun/>
            <p className="font-light">
                Terbit: <span className="font-medium">06:43 AM</span>
            </p>
            <p className="font-light">|</p>
            <UilSunset/>
            <p className="font-light">
                Terbenam: <span className="font-medium">07:00 PM</span>
            </p>
            <p className="font-light">|</p>
            <UilArrowUp/>
            <p className="font-light">
                Tetinggi: <span className="font-medium">36°</span>
            </p>
            <p className="font-light">|</p>
            <UilArrowDown/>
            <p className="font-light">
                Terendah: <span className="font-medium">30°</span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails