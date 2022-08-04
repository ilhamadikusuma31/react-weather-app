import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <div className="text-white text-xl font-extralight">
                Kamis, 04 Agustus 2022 | Waktu Lokal: 12:17 PM
            </div>
        </div>
        <div className="flex items-center justify-center my-3">
            <div className="text-white text-3xl font-medium">
                Jakarta, ID
            </div>
        </div>
    </div>
  )
}

export default TimeAndLocation