import React from 'react'

export default function Card({data}) {
  return (
    <div>
        <h2>{data.name}</h2>
        {data.image ? ( <img src={data.image} alt={data.name+' image'} /> ) : null }
        {data.type ? ( <>Type: <p>{data.type}</p></>) : null}
        {data.dimension ? ( <>Dimension: <p>{data.dimension}</p></>) : null}
        {data.air_date ? ( <>Air Date: <p>{data.air_date}</p></>) : null}
        {data.episode ? ( <>Episode Code: <p>{data.episode}</p></>) : null}
    </div>
  )
}
