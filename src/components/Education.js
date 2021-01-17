import React from 'react';
import Card from './Card';
import schoolLogo from '../assets/schoolLogo.png';
import utdLogo from '../assets/utdLogo.png';

const Education = () => {
    
    return(
    
        <div id='' className='bg-indigo-800'>
        <div className='mx-5 sm:mx-20 xl:mx-64 flex flex-col py-10'>


            <div className='w-full flex justify-center sm:justify-start text-white text-2xl' style={{fontFamily:'Open Sans'}}>
                <span className='font-bold underline'>Education</span> 
            </div>
            <br/>

            <Card location='Bachelors in Computer Science' date='August 2020 - May 2023' title="The University of Texas at Dallas"
                description="Part of the CS^2 Honors program. Involved in UTD's ACM chapter, where I attend industry events and programming 
                competitions. Also a member of the Artificial Intelligence Society, where I learn about AI through hands-on projects and virtual 
                conferences. Part of UTD's Comet Solar Racing club as well, where I design the low-level software systems for a solar-powered vehicle." 
                badges={['Discrete Math I/II', 'Data Structures and Algorithms in C++', 'Unix Programming with C/C++', 'Probability & Stats in CS', 
                'Computer Architecture', 'Linear Algebra', 'Dif/Int Calculus' ]}>{utdLogo}</Card>

            <Card location='HS Diploma' date='August 2018 - June 2020' title='Plano West Senior High School' description='Volunteered for National Honor 
                Society and Spanish National Honors Society. Was programming lead & captain for Plano West Robotics, a First Tech Challenge 
                team aimed at building a driver-controlled/autonomous robot to perform tasks. Participated and won in coding competitions 
                through West Coding Club.' badges={['AP Computer Science', 'AP Microeconomics', 'AP Statistics', 'AP Calculus BC', 'AP Physics C']}
                >{schoolLogo}</Card>


        </div>
        </div>
        
    );

}

export default Education;