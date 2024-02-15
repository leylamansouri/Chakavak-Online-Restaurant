
import './App.css';
import Header from './Header';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes , Route  , useNavigate , Navigate} from 'react-router';
import Breakfast from "./Breakfast";
import { Link } from 'react-router-dom';
import Lunch from "./Lunch"
import Dinner from './Dinner';
import Dessert from './Dessert';
import Allmeal from './allmeal'
import Singlemeal from './singlemeal'
import Footer from './footer';


function App() {
  return (
    
    <div className="App">
     
     
     <Routes>
     <Route path="/" element={<Header />}>

     <Route path="/" element={<Navigate to="/Allmeal"  />}/>

      <Route path="Breakfast" element={<Breakfast/>}/>
      <Route path="Lunch" element={<Lunch/>}/>
      <Route path="Dinner" element={<Dinner/>}/>
      <Route path="Dessert" element={<Dessert/>}/>

      <Route path="Allmeal" element={<Allmeal/>}/>
      

      <Route  path="/singlemeal/:smid" element={<Singlemeal/>}></Route>
    </Route>
    </Routes>
    <Footer />
    </div>

  
  )
}

export default App;
