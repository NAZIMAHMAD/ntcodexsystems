import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial';
import Project from './components/Project';

function App() {
  
  return (
    <>


<Navbar/>

<Routes>


<Route path="/"   element={<Home/>} />
<Route path="/About"   element={<About/>} />
<Route path="/Services"   element={<Services/>} />
<Route path="/Gallery"   element={<Gallery/>} />
<Route path="/Blog"   element={<Blog/>} />
<Route path="/Project"   element={<Project/>} />

<Route path="/Testimonial" element={<Testimonial/>} />
<Route path="/Contact"   element={<Contact/>} />



</Routes>

<Footer/>
     





    </>
  );
}

export default App;
