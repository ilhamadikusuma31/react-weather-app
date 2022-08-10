import React from 'react'


function TopButton({setQuery}) {

    const cities = [
        {
            id:"1",
            title:"Jakarta"
        },
        {
            id:"2",
            title:"Tokyo"
        },
        {
            id:"3",
            title:"Berlin"
        },
        {
            id:"4",
            title:"Milan"
        },
        {
            id:"5",
            title:"Seoul"
        },
    ]


    return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}


export default TopButton