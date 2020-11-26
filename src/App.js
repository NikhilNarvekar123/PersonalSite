import React from 'react';
import logo from './logo1.png';
import './App.css';
import Section from './Section.js';
import {Navbar} from './Navbar.js';
import profilePic from './homepfp.png';
import background from './bgd2.png';

function App() {

  let h1Style = {color:'white'};

  return (
    <div className="App">
      <Navbar/>
        
      <Section image={background} height='400px'>
        <img src={profilePic} width='200px' height='200px'></img>
        <h1 style={h1Style}>
          Data Science
        </h1>
      </Section>
      <Section color='#2c2c2c'>
        <h1 class='text-lg'>About</h1>
        <p></p>
      </Section>


      <header className="App-header">
      
      
        
    
      </header>
    
    
    </div>
  );




}

export default App;
