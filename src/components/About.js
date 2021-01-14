import React from 'react';
import profilePic from '../assets/PersonalPicture.png';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faInstagram, faFigma } from "@fortawesome/free-brands-svg-icons"


const About = () => {


    return(

        <div id='about' class='nightBody py-10'>
        
            <div class='night'>
                <div class='shooting_star'></div>
                <div class='shooting_star'></div>
                <div class='shooting_star'></div>
                <div class='shooting_star'></div>
            </div>


            <div className='flex flex-col md:flex-row justify-center w-full my-6 space-y-10 md:space-x-20'>

                <div className='flex justify-center flex-col'>

                    <div className='flex justify-center'>
                        <img src={profilePic} className="block shadow rounded-full max-w-full h-auto align-middle" width='200px' height='200px'></img>
                    </div>
                    <br/>

                    <div className='flex justify-center space-x-2'>
                        <a href='https://www.linkedin.com/in/nikhil-narvekar-28117a15b/' target='blank'><FontAwesomeIcon icon={faLinkedin} size="2x" color='#5271ff'/></a>
                        <a href='https://github.com/NikhilNarvekar123' target='blank'><FontAwesomeIcon icon={faGithub} size="2x" color='#5271ff'/></a>
                        <a href='mailto:nikhil.narvekar.712@gmail.com' target='blank'><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" color='#5271ff'/></a>
                    </div>
                
                </div>

                <div className='sm:ml-16 sm:flex sm:flex-col'>

                    <div className='w-full flex justify-center sm:justify-start text-white text-3xl' style={{fontFamily:'Open Sans'}}>
                        <span className='font-bold'>👋 Hi! I'm  <span className='underline'>Nikhil</span></span> 
                    </div>
                    <br/>
                    <div className='text-white text-md font-bold' style={{fontFamily:'Open Sans'}}>
                        <div className='sm:flex sm:justify-start'>
                            CS^2 Honors Sophomore @ &nbsp;<span className='text-blue-400'>The University of Texas at Dallas</span> 
                        </div>
                        <div className='sm:flex sm:justify-start'>
                            Spring SDE Intern @ &nbsp;<span className='text-blue-400'>RealPage</span> 
                        </div>
                        <div className='sm:flex sm:justify-start'>
                            Interests: &nbsp;<span className='text-blue-400'>Web Dev, Machine Learning, AI, Robotics</span> 
                        </div>
                    </div>

                </div>

            

            </div>


        
        </div>

    );


}

export default About;