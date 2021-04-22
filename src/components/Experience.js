import React from 'react';
import nasa from '../assets/nasaLogo.png'
import spacex from '../assets/spacex.jpg'
import realpage from '../assets/realpageLogo.png'
import utd from '../assets/utdLogo.png'
import Card from './Card'
import NewCard from './NewCard'

const Experience = () => {


    var realpageExp = ['Building SaaS leasing dashboard application/REST API using Spring (Java) and PostgreSQL.',
    'Using Swift and Angular.js to create frontend interface for leasing dashboard app., used by over 200 clients.']

    return(
    
        <div id='' className=''>
        <div className='mx-5 sm:mx-20 xl:mx-64 flex flex-col py-10'>

        <div className='w-full flex justify-center text-white text-2xl mb-10' style={{fontFamily:'Open Sans'}}>
                <span className='font-bold'>Internships & Research</span> 
        </div>
        <br/>
        

        <div class="flex items-center justify-center">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      
            <NewCard badges={[1,2,3]} img={spacex} name='SpaceX' location='Hawthorne, CA' date='June 2021 - August 2021' responsibilities={['Using Python/Rust to work on flight software']}/>
            <NewCard badges={[1,2,3]} img={realpage} name='RealPage' location='Dallas, TX' date='February 2021 - May 2021' responsibilities={realpageExp}/>
            <NewCard badges={[1,2,3]} img={utd} name='UTD' location='Dallas, TX' date='February 2021 - May 2021' responsibilities={['Using Python/Rust to work on flight software']}/>

        </div>
        </div>
        


            {/* <Card location='Virtual' date='June 2021 - August 2021' title="NASA L'SPACE Mission Concept Academy Fellow"
                description='Selected as part of NASA’s MCA program for national undergraduate students. Creating a design proposal 
                for a designated space mission and reviewed by graduate students. Receiving mentoring and lectures
                by NASA engineers.' badges={['Robotics', 'Research', 'Computer Simulations', 'Engineering']}>{nasa}</Card> */}


        </div>
        </div>
    );

}

export default Experience;