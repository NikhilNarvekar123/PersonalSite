import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Section} from './Section.js';
import {Navbar} from './Navbar.js';
import profilePic from './profileImg.png';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section background = "#5271ff">
        <div>
          <img src = {profilePic}/>
          <h1>Nikhil Narvekar</h1>
          <h2>probably coding right now</h2> 
        </div> 
        <div>             
          <p style = {{marginLeft: "50px", marginRight: "50px", textAlign: "left"}}>
            Hi! I'm a computer science major at The University of Texas at Dallas skilled in web development and software engineering.
            Whether individually or as a part of a team, I love tackling challenges and innovating solutions to real world issues.
            I'm also a fast learner and looking for internships for 2021.
          </p>
        </div>
      </Section>
      
      <header className="App-header">

        


        <h2>Skills</h2>
        <ul>
          <h3>Languages</h3>
          <li>Java</li>
          <li>Python</li>
          <li>C++</li>
          <li>JavaScript</li>  
          <li>HTML/CSS</li>

          <h3>Frameworks</h3>
          <li>React.JS</li>
          <li>Angular.JS</li>

          <h3>Soft Skills</h3>
          <li>Teamwork</li>
          <li>Leadership</li>
          <li>Presentation</li>
        </ul>      


        <h2>Projects</h2>
        <p>COVID-19 tracer, autonomous robot, Chess-C, data science project</p>

        <h2>Experience</h2>
        <h3>Jobs</h3>
        <p>wemapsales</p>
        <p>youngbytes</p>
        <p>icode</p>
        <h3>Organizations</h3>
        <p>ACM</p>
        <p>comet solar racing</p>
        <p>NHS/SHS</p>
        <h3>Competitions</h3>
        <p>FTC</p>
        <p>big idea comp</p>

        <h2>education</h2>
        <p>current school</p>
        <p>previous school</p>

        <h2>misc</h2>
        <p>click here to get to some of the other parts of my website!</p>
        
      </header>
    </div>
  );
}

export default App;
