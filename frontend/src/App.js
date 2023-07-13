import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import {Routes,Route} from 'react-router-dom';
import Skill from './routes/Skill';
import './index.css';
import './App.css';
import Qualifiaction from './routes/Qualifiaction';


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skill' element={<Skill/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/qualification' element={<Qualifiaction/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </>
  );
}

export default App;
