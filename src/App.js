
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

  return (
    <section className='main'>
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
