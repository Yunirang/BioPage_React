import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./layout";
import Home from "./home";
import Blogs from "./blogs";
import Contact from "./contact";
import Bootstrap from './bootstrap.js';
import BioDetails from  './advisorDetail.js';
import data from './advisorsMockData.json';
import {Link} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
     
      <Routes>
        <Route exact path="/" element={<Bootstrap advisors={data}/>} />
        <Route path="/detail/:id" element={<BioDetails advisors={data} />} />
        <Route path="/blogs" element={<Blogs advisors={data}/>} />
        <Route path="/contact" element={<Contact advisors={data}/>} />
        <Route path="/home" element={<Home advisors={data}/>} />
      </Routes>

    </BrowserRouter>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
