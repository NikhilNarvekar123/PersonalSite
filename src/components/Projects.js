import React from 'react';
import nasa from '../assets/nasaLogo.png'
import realpage from '../assets/realpageLogo.png'
import wemapsales from '../assets/wemapsalesLogo.png'
import CardSmall from './CardSmall'


const Projects = () => {
    
    return(
    
        <div id='projects' className='bg-indigo-700'>
        <div className='mx-5 sm:mx-20 xl:mx-64 flex flex-col py-10'>


            <div className='w-full flex justify-center sm:justify-start text-white text-2xl' style={{fontFamily:'Open Sans'}}>
                <span className='font-bold underline'>Projects</span> 
            </div>
            <br/>


            <div class='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>

            <CardSmall name='Grassroots Gov' description='Building React website for Grassroots.gov, organization aimed at
                increasing political involvement. Implemented data-fetching from both APIs and Firebases to display on website. 
                Also worked on the site’s UI with Tailwind.css.' badges={['React.js', 'Tailwind', 'Firebase', 'Node.js']}
                viewlink='https://grassrootsgov.org/' codelink=''/>

            <CardSmall name='Neural Network Racer' description='Creating a Python-based neural network that can learn how to 
                maneuver a car around a racetrack. Simulation is 2D and car feeds data of its location on the racetrack to the 
                network, which then trains itself to drive without hitting any walls.' badges={['Python', 'Machine Learning', 'Neural Networks']}
                viewlink='' codelink='https://github.com/NikhilNarvekar123/Neural-Network-Racing'/>


            <CardSmall name='Chess-C' description='Created a C++ program/executable which featured three modes. Mode A allows 
                two players to play a game of chess. Mode B allows a player to play against an AI, which I made using the Minimax 
                algorithm. Mode C allows a player to watch two AIs play a game of chess.' badges={['C++', 'AI']}
                viewlink='https://www.notion.so/Chess-C-3b08798e31db4a6f850d38347cd087e3' codelink='https://github.com/NikhilNarvekar123/Chess-C'/>

            <CardSmall name='COVID-19 Web Contact Tracer' description='Website which lets users check whether they have 
                contacted anyone tested positive for COVID-19 using GPS data. Frontend built using HTML, CSS, and vanilla 
                JS. Backend is built with Django framework and uses Firebase for user data.' badges={['HTML/CSS', 'JS', 'Django', 'Firebase','Python']}
                viewlink='https://safefromcovid.herokuapp.com/' codelink='https://github.com/NikhilNarvekar123/COVID-19-Safety-Website'/>


            <CardSmall name='Autonomous Driver Robot' description='FTC competition robot built to perform certain tasks fully 
                autonomously and by driver control. Used CAD to model robot and REV parts to construct it. Used Java and Android 
                Studio to create robot programs, along with OpenCV for image detection.' badges={['Java', 'OpenCV', 'Android', 'TensorFlow']}
                viewlink='' codelink='https://github.com/NikhilNarvekar123/2020-Skystone-Code'/>

            <CardSmall name='Sidescroller Adventure' description="A 2.5D game developed for my college's game development competition. 
                Uses Unity, Maya, and Blender." badges={['Unity', 'Blender']}
                viewlink='https://www.notion.so/Chesthunter-2D-Sidescroller-22374c4507bc418c9bef71169a132e39' codelink='https://github.com/NikhilNarvekar123/Sidescroller-Unity'/>



            </div>


        </div>
        </div>
        
    );

}

export default Projects;