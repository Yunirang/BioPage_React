import './App.css';
import React from 'react';
import data from './advisorsMockData.json';
import Bootstrap from './bootstrap.js';
import Detailes from  './advisorDetail.js';

function App(){
  return (
    <>
        <Bootstrap advisors={data}/>
        <Detailes advisors={data}/>
    </>
  )
}

// export makes it accessible to other files
export default App;
