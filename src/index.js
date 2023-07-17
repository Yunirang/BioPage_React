import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// eslint-disable-next-line no-unused-vars
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bootstrap from './bootstrap.js';
import BioDetails from  './advisorDetail.js';
import data from './advisorsMockData.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>

         {/* Our-Advisors page */}
        <Route exact path="/" element={<Bootstrap advisors={data}/>} />

        {/* Advisor Details page */}
        <Route path="/detail/:advName" element={<BioDetails advisors={data} />} />
        
      </Routes>
    </BrowserRouter>
  );



reportWebVitals();
