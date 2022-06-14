import React from 'react'
const Input = ({setSearchLocation}) => {
    

    const search = e=> {
    e.preventDefault() 
    setSearchLocation(e.target.firstChild.value)
    }


  return (
    <section className='form'>
      <form onSubmit={search}>
        <input placeholder='Number' type="text" />
        <button>Search</button>
      </form>
   </section>
  )
}

export default Input