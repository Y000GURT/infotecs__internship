import React from 'react';
import './style/App.css'
import MyTable from './components/MyTable';
import { useState } from "react";

function App() {
  const [searched, setSearched] = useState('')

  return (
    <div className="App">
      <div className='app-wrapper'>
      <img className='thead__img' src='./img/sortOff.png' alt=""/>
        <input 
          className='app-wrapper__search' 
          placeholder='Поиск' 
          value={searched}
          onChange={e => setSearched(e.target.value)}/>

        <MyTable searched={searched}></MyTable>
      </div>
    </div>
  );
}

export default App;
