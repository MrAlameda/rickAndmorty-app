
import "./index.css"

import CardCharacter from './components/CardCharacter'
import Input from './components/Input'
import LocationInfo from './components/LocationInfo'
import useApiRick from './hooks/useApiRick'
import {useState} from 'react'

const  App=()=> {

  const [searchLocation, setSearchLocation] = useState()
  const location = useApiRick(searchLocation)

  console.log (searchLocation)

  const text=`Hello, try looking for a dimension ;)`

  return (
    <section className='main'>
      <div className="prent">{text}</div>
     <Input
     setSearchLocation={setSearchLocation}
     />
      <LocationInfo
        location={location} 
        />

      <div className="container_CardCharacter">
        {location?.residents.map(resident => (
          <CardCharacter
            resident={resident}
            key={resident}
             />
        )
        )}
      </div>
    </section>
  )
}

export default App 
