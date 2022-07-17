import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';

// import {Route,Switch,BrowserRouter as Router,Link} from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
    
    <Navbar/>
    {/* <Switch>
    <Route exact path="/">
      <Home/>
    </Route>

    <Route  path="/about">
      <About/>
    </Route>

    <Route  path="/contact">
      <ContactUs/>
    </Route>

    <Route  path="/login">
      <Login/>
    </Route>

    <Route  path="/register">
      <Register/>
    </Route>
</Switch>
     */}
 {/* <Switch>
 <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
         </Route>
         <Route path="/login">
            <Login />
         </Route>
         
        </Switch> */}

        <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/contact" element={<ContactUs/>} />
    <Route path="/register" element={<Register/>} />
</Routes>

    </>



  )
}

export default App