import React from 'react'

function TopButton() {

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
    <div className="flex items-center justify-around my-3">
            {cities.map(e => (
            <button key={e.id} className="text-white font-medium text-lg">
                {e.title}
            </button>
            ))}
    </div>
  )
}

export default TopButton