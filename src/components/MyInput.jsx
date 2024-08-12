import React from 'react'
import { useState } from 'react'

const MyInput = ({ getValueFromInput }) => {

    const [query, setQuery] = useState('')

    function handleInput(e) {
        setQuery(e.target.value)
        getValueFromInput(e.target.value)
    }
    return (
        <input 
          className='app__search' 
          placeholder='Поиск' 
          value={query}
          onChange={handleInput}
        />
    )
}

export default MyInput