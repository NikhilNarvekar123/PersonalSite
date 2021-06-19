import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import About from './components/About.js'
import Skills from './components/Skills.js';
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import More from './components/More'
import Contact from './components/Contact'

import Intro from './v2/Intro'

function App() {

  return (



    <div className="App" style={{background:'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'}}>
      
      <Navbar/>
      
      <Intro/>

      <div id='experience' className='py-4'/> 
      <Experience/>



      <div id='projects' className='py-4'/>
      <Projects/>


      {/* <div id='skills' className='py-4'/>
      <Skills/> */}

      {/* <div className='text-lg text-white'>
        -----------
      </div> */}

      
      {/* <div className='text-lg text-white'>
        -----------
      </div> */}


      {/* <div className='text-lg text-white'>
        -----------
      </div> */}

      <div id='education' className='py-4'/>
      <Education/>


      <div id='more' className=''/>
      <More/>
      
      <div id='contact' className=''/>
      <Contact/>
    
    </div>

  );




}


const Card = (props) => {

  let classTxt = 'text-sm px-3 p-0.5 text-white rounded-full ' + props.color;

  return(
    <>
      <div class={classTxt}>
        {props.children}
      </div>
    </>
  );


}



export default App;
