import React from 'react'

const LocationInfo = ({location}) => {
  return (
   <section className='cardLocation'>
    <div className='box_infoLocation'>
      <div>
        <p>Location:</p>
        <p> {location?.name}</p>
      </div>
      <div>
        <p>Type: </p><p>{location?.type}</p>
        </div>
      <div>
        <p>Dimsencion: </p><p> {location?.dimension}</p>
      </div>
      <div>
        <p>Residents: </p><p> {location?.residents.length}</p>
      </div>
    </div>
   </section>
  )
}

export default LocationInfo