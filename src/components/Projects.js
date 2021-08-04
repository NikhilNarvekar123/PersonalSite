import React from 'react';
import Card from './Card'


const Projects = () => {
    
    return(
    
        <div className='hidden md:block'>
            <div className='mx-5 sm:mx-20 xl:mx-64 flex flex-col py-10'>

                <div className='w-full flex justify-center text-white text-2xl' style={{fontFamily:'Cabin'}}>
                    <span className='font-bold'>Projects</span> 
                </div>
                <br/>

                <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    <Card
                        name='Grassroots Gov'
                        description='Built React-based site from ground-up aimed at making political involvement
                            more accessible. Created backend to interact with Firebase DB and congressional APIs. 
                            Styled with Tailwind.css.' 
                        badges={['React', 'Tailwind', 'Firebase', 'Node']}
                        viewlink='https://grassrootsgov.org/' 
                    />

                    <Card 
                        name='Chess-C'
                        description='C++ program with 3 modes to play chess. Mode A is a 2-player game, Mode B is 
                            1-player against a custom-built minimax AI, and Mode C is watching 2 AI players play against themselves.' 
                        badges={['C++']}
                        viewlink='https://www.notion.so/Chess-C-3b08798e31db4a6f850d38347cd087e3' 
                        codelink='https://github.com/NikhilNarvekar123/Chess-C'/>

                    <Card 
                        name='COVID Contact Tracer' 
                        description='Website uses GPS data to check if a user has been in contact with a self-reported COVID case. Also has check-in
                            functionality for locations user has entered. Built with vanilla JS/HTML/CSS, Django, and Firebase.' 
                        badges={['HTML/CSS', 'JS', 'Django', 'Firebase','Python']}
                        viewlink='https://safefromcovid.herokuapp.com/' 
                        codelink='https://github.com/NikhilNarvekar123/COVID-19-Safety-Website'/>

                    <Card
                        name='Autonomous Robot'
                        description='FTC competition robot built to perform certain tasks fully 
                        autonomously or by driver control. Robot code is in Java, TensorFlow + OpenCV are used
                        for image recognition. PID algorithms and state machines are used for robot movement.' 
                        badges={['Java', 'OpenCV', 'Android', 'TensorFlow']}
                        codelink='https://github.com/NikhilNarvekar123/2020-Skystone-Code'/>

                    <Card 
                        name='2.5D Sidescroller'
                        description="Developed a sidescroller game for UTD's GameJam competition. Custom-built models using Blender, and
                        scripted levels with Unity/C#." 
                        badges={['C#', 'Unity', 'Blender']}
                        viewlink='https://www.notion.so/Chesthunter-2D-Sidescroller-22374c4507bc418c9bef71169a132e39'
                        codelink='https://github.com/NikhilNarvekar123/Sidescroller-Unity'
                    />

                    <Card 
                        meta={true}
                        description='more coming soon'
                    />


                </div>


            </div>
        </div>
        
    );

}

export default Projects;