import React from 'react';
import './styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare, faFile, faSortDown} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import Particles from 'react-particles-js';
import Projects from './components/Projects';
import pdf from './assets/NarvekarNikhil2023.pdf'

function App() {

	return(
    <div class='bg-black'>
    
    	<div>
        
        	<Particle/>

        	<div class='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
          		<div class='grid grid-cols-1 justify-items-center gap-6'>
                
            		<div class='text-5xl text-white' style={{fontFamily: 'Cabin', fontWeight: 600}}>Nikhil Narvekar</div>    

					<div class="grid grid-cols-4 gap-4">
						<a href='https://github.com/NikhilNarvekar123' target='blank'><FontAwesomeIcon icon={faGithub} size="2x" color='#ffffff'/></a>
						<a href='https://www.linkedin.com/in/nikhil-narvekar123/' target='blank'><FontAwesomeIcon icon={faLinkedin} size="2x" color='#ffffff'/></a>
						<a href='mailto:nikhil.narvekar.712@gmail.com' target='blank'><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" color='#ffffff'/></a>
						<a href={pdf} target='blank'><FontAwesomeIcon icon={faFile} size="2x" color='#ffffff'/></a>
					</div>

            		<div class='grid grid-cols-1 justify-items-center gap-1'>

						<div class='text-xl text-white text-center' style={{fontFamily: 'Cabin'}}>
						
							Infra/Fullstack Intern @&nbsp;
							<a href='https://www.spacex.com/' target='blank'>
								<u>SpaceX</u>
							</a>, 

							previously Application Engineering Intern @&nbsp;
							<a href='https://www.realpage.com/' target='blank'>
								<u>RealPage</u>
							</a>

						</div>

						<div class='text-xl text-white text-center' style={{fontFamily: 'Cabin'}}>

							Computer Science @&nbsp;
							<a href='https://www.utdallas.edu/' target='blank'>
								<u>UTD</u>
							</a>,

							Software Lead at Comet Solar Racing

						</div>

						<div class='text-xl text-white text-center' style={{fontFamily: 'Cabin'}}>
							Interested in Robotics + AI
						</div>

            		</div>

          		</div>
        	</div>
		
		</div>
      
		<div class='flex items-center justify-center hidden md:flex'>
			<FontAwesomeIcon icon={faSortDown} size='2x' color='white'/>
		</div>

		<div class='block md:hidden'>
			<div style={{height: '500px'}}>
			</div>
		</div>

    	<Projects/>

	</div>
	);

}

const Particle = () => {
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
					value: "#417FFF"
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
					color: "#417FFF",
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



export default App;