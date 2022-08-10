import React from 'react'
import { iconUrl } from '../services/weatherServices'


function Forecast({ judul, items }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{judul}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {items.map((i, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{i.title}</p>
            <img
              src={iconUrl(i.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${i.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast