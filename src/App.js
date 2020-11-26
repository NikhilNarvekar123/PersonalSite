import React from 'react';
import logo from './logo1.png';
import './App.css';
import Section from './Section.js';
import {Navbar} from './Navbar.js';
import profilePic from './pfp.png';
import background from './bgd2.png';

function App() {

  let h1Style = {color:'white'};

  return (
    
    <div className="App">
      
      <Navbar/>
        
      <Section image={background} height='400px'>
        <div className='content-center'>
          <img src={profilePic} className="shadow rounded-full max-w-full h-auto align-middle border-none" width='200px' height='200px'></img>
          <h1 style={h1Style}>
            Data Science & AI | Web Dev. | Autonomous Systems 
          </h1>
          <div class="inner">
				<ul class="icons">
					<li><a href="https://www.linkedin.com/in/nikhil-narvekar-28117a15b/" className="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
					<li><a href="https://github.com/NikhilNarvekar123" class="icon brands fa-github"><span class="label">Github</span></a></li>
					<li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
					<li><a href="mailto:nikhil.narvekar.712@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
				</ul>
			</div>
        </div>
      </Section>

      <Section color='#2c2c2c'>
        <h1 class='text-lg'>About</h1>
        <p>
          Hi! I'm a sophomore at the University of Texas at Dallas majoring in computer science. 
          I have a background in creating and mentoring, leading to my interest in using technology to improve overall quality-of-life.
          I'm primarily skilled in web development, data science & AI, robotics, and UI/UX design.
        </p>
        <p>
          I love teamwork & collaboration, and I've been a part of many great team-based competitions. 
          At the same time, I also love independently learning increasing my skillset. 
          Outside of computer science, I love biking, hanging out with friends (virtually 😷), and writing. 
          Looking for Summer/Spring 2021 internships!
        </p>
      </Section>
      
      <Section>
      <h2>Skills</h2>
      </Section>

      <Section>
        <h1>Work Experience</h1>
      </Section>

      <Section>
        <h1>Projects</h1>
      </Section>

      <Section>
        <h1>Education & Organization</h1>
      </Section>
      
      <Section>
        Contact
      </Section>


    
    
    </div>
  );




}

export default App;
