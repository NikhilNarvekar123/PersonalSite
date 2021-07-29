import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare, faFile, faSortDown} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faInstagram, faFigma } from "@fortawesome/free-brands-svg-icons"
import Particles from 'react-particles-js';



function App() {


  return(

    <div class='bg-black'>
    
    <div>
      <Particle/>

      <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center'>

        <div class='grid grid-cols-1 justify-items-center gap-3'>
          
          
          <div class='text-5xl text-white'>Nikhil Narvekar</div>    

          <div class="grid grid-cols-4 gap-4">
              <a href='https://github.com/NikhilNarvekar123' target='blank'><FontAwesomeIcon icon={faGithub} size="2x" color='#ffffff'/></a>
              <a href='https://www.linkedin.com/in/nikhil-narvekar-28117a15b/' target='blank'><FontAwesomeIcon icon={faLinkedin} size="2x" color='#ffffff'/></a>
              <a href='mailto:nikhil.narvekar.712@gmail.com' target='blank'><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" color='#ffffff'/></a>
              <a href='' target='blank'><FontAwesomeIcon icon={faFile} size="2x" color='#ffffff'/></a>
          </div>


          <div class='text-2xl text-white text-center'>
            SpaceX Flight Software Intern, previously Fullstack Intern at RealPage.
            <br/>
            Interested in robotics/AI. UTD Computer Science. 
          </div>


        </div>



      </div>

    </div>
    
    <div class='flex items-center justify-center'>
      <FontAwesomeIcon icon={faSortDown} size='2x' color='white'/>
    </div>

    <div>
      <br/>
    </div>

    

  </div>
  )





}



const Particle = (props) => {
  
  return (
      <div className='particles'>
        <Particles
          params={{
            particles: {
              number: {
                value: 96,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 6
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
        >
        </Particles>
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
