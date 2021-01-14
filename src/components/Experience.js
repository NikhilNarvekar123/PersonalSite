import React from 'react';
import nasa from '../assets/nasaLogo.png'
import realpage from '../assets/realpageLogo.png'
import wemapsales from '../assets/wemapsalesLogo.png'
import Card from './Card'

const Experience = () => {

    return(
    
        <div id='experience' className='bg-indigo-800'>
        <div className='mx-20 lg:mx-64 flex flex-col py-10'>


            <div className='w-full flex justify-center sm:justify-start text-white text-2xl' style={{fontFamily:'Open Sans'}}>
                <span className='font-bold underline'>Experience</span> 
            </div>
            <br/>

            <Card location='Virtual' date='June 2021 - August 2021' title="NASA L'SPACE Mission Concept Academy Fellow"
                description='Selected as part of NASA’s MCA program for national undergraduate students. Creating a design proposal 
                for a designated space mission and reviewed by graduate students. Receiving mentoring and lectures
                by NASA engineers.' badges={['Robotics', 'Research', 'Computer Simulations', 'Engineering']}>{nasa}</Card>

            <Card location='Virtual' date='February 2021 - May 2021' title='RealPage Software Developer Intern' description='Working with Spring & Java to 
                build financial dashboard application. Using Angular.js to build frontend of application.' 
                badges={['Spring', 'Java','Angular']}>{realpage}</Card>

            <Card location='Virtual' date='May 2020 - September 2020' title='WeMapSales Web Developer Intern' description='Worked with PHP, JS, and HTML/CSS 
                to improve company website. Optimized site to load videos faster (3s difference). Used WordPress engine.' 
                badges={['WordPress', 'PHP','JS' ,'HTML/CSS']}>{wemapsales}</Card>


        </div>
        </div>
    );

}

export default Experience;