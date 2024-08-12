import React from 'react';
import './style/App.css'
import MyTable from './components/MyTable';
import MyInput from './components/MyInput';
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  function getValueFromInput(value) {
    setSearchQuery(value)
  }

  return (
    <div className="app-wrapper">
      <div className='app'>
        <MyInput getValueFromInput={getValueFromInput}></MyInput>
        <MyTable searched={searchQuery}></MyTable>
      </div>
    </div>
  );
}

export default App;
