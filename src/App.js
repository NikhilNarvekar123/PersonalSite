import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import About from './components/About.js'
import Skills from './components/Skills.js';
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'




function App() {

  return (
    
    <div className="App">
      
      <Navbar/>
        

      <About/>



      <Skills/>

      {/* <div className='text-lg text-white'>
        -----------
      </div> */}

      <Experience/>
      
      {/* <div className='text-lg text-white'>
        -----------
      </div> */}

      <Projects/>

      {/* <div className='text-lg text-white'>
        -----------
      </div> */}

      <Education/>


    
    
    </div>
  );




}

export default App;
