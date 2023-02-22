import React from 'react';
import './App.css';
import Home from "./Home";
import Dashboard from "./Dashboard";
import Track from "./Track";
import Features from "./Features";
import Footer from'./footer';
import Navbar from "./navbar"; 
import Register from './register';
import Login from "./Login";
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Charges from './img/charges.jpg'

function App() {
  
  return (
    
    <div className="main">  
  <div>
    
    <BrowserRouter>
    <Navbar/>
       <Switch>
      <Route exact path="/Home" component={Home} ></Route>
      <Route exact path="/Dashboard"  component={Dashboard} ></Route> 
      <Route exact path="/Track" component={Track} ></Route>
      <Route exact path="/Features" component={Features} ></Route>
     <Route  exact path="/Login" component={Login} ></Route>
      <Route exact path="/Register" component={Register} ></Route>
      <Route exact path="/charges" component={Charges} ></Route>
    </Switch>
    <Footer/>
 </BrowserRouter>
 </div>
    
    
   
    </div>    







  
  );
}

export default App;
