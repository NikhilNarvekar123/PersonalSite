import React from 'react';
import './App.css';
<<<<<<< HEAD
import Navbar from './Navbar.js';
import About from './components/About.js'
import Skills from './components/Skills.js';
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'


=======
import Section from './Section.js';
import {Navbar} from './Navbar.js';
import DisplayBox from './DisplayBox.js';
import profilePic from './pfp.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
>>>>>>> f569d56c06150d1456fb3f928ac4798069f319a2


<<<<<<< HEAD
function App() {
=======

>>>>>>> f569d56c06150d1456fb3f928ac4798069f319a2

  return (
    
    <div className="App">
      
      <Navbar/>
<<<<<<< HEAD
        

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


=======



      <Section topEnabled='false'>
        <img src={profilePic} className="shadow rounded-full max-w-full mx-auto align-middle border-none" width='200px' height='200px'></img>
        <br/>
        <h1 className='text-3xl text-white'>nikhil</h1>
        <p className='text-xl text-white'>
          AI | Robotics | Web Dev
        </p>
        <br/>
        <div className="container mx-auto space-x-4">
          <FontAwesomeIcon icon={faLinkedin} color='#49bf9d' size='2x'/>
          <FontAwesomeIcon icon={faGithub} color="#49bf9d" size='2x'/>
          <FontAwesomeIcon icon={faEnvelope} color="#49bf9d" size='2x'/>
          <FontAwesomeIcon icon={faInstagram} color="#49bf9d" size='2x'/>
        </div>        
      </Section>



      <Section> 
        <h1 className='text-2xl text-white'>about</h1>
        <div className='flex justify-center'>
          <p className='text-lg text-white text-left max-w-xl break-words py-5'>
            Hi! I'm a sophomore at the <u>University of Texas at Dallas</u> majoring in <u>computer science</u>. I'm primarily skilled/interested in  
            web development, data science, AI, robotics, and UI/UX design. In the future, I plan on pursuing a career developing autonomous agents 
            that can automate tasks humans can & can't do.
            <br/><br/>
            I am a flexible worker. I enjoy team-based & independent work. Currently looking for Summer/Spring 2021 internships!
          </p>
        </div>
      </Section>

      <Section>
        <h1 className='text-2xl text-white'>skills</h1>
        <div className='flex justify-center flex-wrap space-x-5'>
          <DisplayBox color='bg-blue-400'>
            <h3 className='text-lg text-white'>Web Dev</h3>
            <Card color='bg-red-400'>React</Card>
            <Card color='bg-red-400'>Javascript</Card>
            <Card color='bg-red-400'>HTML/CSS</Card>
            <Card color='bg-red-400'>SQL</Card>
            <Card color='bg-red-400'>Firebase</Card>
            <Card color='bg-red-400'>UI/UX</Card>
            <Card color='bg-red-400'>Node.js</Card>  
          </DisplayBox>
          <DisplayBox color='bg-green-400'>
            <h3 className='text-lg text-white'>Software Engineering</h3>
            <Card color='bg-red-400'>Java</Card>
            <Card color='bg-red-400'>Python</Card>
            <Card color='bg-red-400'>C++</Card>
            <Card color='bg-red-400'>Unity</Card>
            <Card color='bg-red-400'>Android</Card>
          </DisplayBox>
          <DisplayBox color='bg-orange-400'>
            <h3 className='text-lg text-white'>AI & Robotics</h3>
            <Card color='bg-red-400'>TensorFlow</Card>
            <Card color='bg-red-400'>Robot-C</Card>
            <Card color='bg-red-400'>Robot-Java</Card>
            <Card color='bg-red-400'>OpenCV</Card>
            <Card color='bg-red-400'>Numpy</Card>
            <Card color='bg-red-400'>Matplotlib</Card>
          </DisplayBox>
        </div>
      </Section>

      <Section>
        <h1 className='text-2xl text-white'>experience</h1>
        <div className='flex rounded-md bg-blue-400 w-20'>
          <h3 className='text-lg text-white'>YoungBytes</h3>
        </div>
      </Section>
>>>>>>> f569d56c06150d1456fb3f928ac4798069f319a2
    
    
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
