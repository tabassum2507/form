import React from 'react'

const InfoList = (details) => {
  return (
    <div>{details.map((detail) => (
        <div className="card" key={detail.name}>
            <p>{detail.name}</p>
            <p>{detail.email}</p>
            <p>{detail.password}</p>
        </div>
  ))}
  </div>
  )
}

export default InfoList