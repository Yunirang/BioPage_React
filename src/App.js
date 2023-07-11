import './App.css';
import React from 'react';
import data from './advisorsMockData.json';
// import Game from './game.js';
import Bootstrap from './bootstrap.js';


function App(){
  return (
    <>
      <div className="data">
      {data.map((advisor,i) => (
        <div key={i} className="advisor">
          <h1>{advisor.advisorName}</h1>
          <h2>{advisor.position}</h2>
          <h3>{advisor.adress}</h3>
          <h4>{advisor.phone}</h4>
          <h5>{advisor.email}</h5>
          <h6>{advisor.phone}</h6>
          <p>{advisor.bio}</p>
        </div>
        )
      )}
    </div>
        {/* <Game/> Uncomment to see game */} 
        <Bootstrap advisors={data}/>
    </>
    

  )
}

// export makes it accessible to other files
export default App;
