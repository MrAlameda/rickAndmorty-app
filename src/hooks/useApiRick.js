import axios from "axios"
import { useEffect, useState } from "react"

const useApiRick = searchLocation => {

    const [location, setLocation] = useState()
    
    useEffect(() => {

        let numberLocation
        if(searchLocation){
            numberLocation = searchLocation
        }else{
         numberLocation = Math.ceil(Math.random() * 126)
        }
        
        const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`

        axios.get(URL)
            .then(res => setLocation(res.data))
            .catch(err => console.log(err))

    }, [searchLocation])


    return location

}

export default useApiRick