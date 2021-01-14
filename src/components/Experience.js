import React from 'react';
import nasa from '../assets/nasaLogo.png'

const Experience = () => {

    return(
    
        <div className='bg-indigo-800'>
        <div className='mx-20 lg:mx-64 flex flex-col py-10'>


            <div className='w-full flex justify-center sm:justify-start text-white text-2xl' style={{fontFamily:'Open Sans'}}>
                <span className='font-bold underline'>Experience</span> 
            </div>
            <br/>


            <div className=''>

                <div className='float-left flex flex-col text-left max-w-3xl'>
                    <div className='text-white mb-2' style={{fontFamily:'Open Sans'}}>
                        <span className='font-bold text-xl'>NASA Mission Concept Academy,</span>
                        &nbsp;&nbsp;<span className='text-l font-normal'>Jun 2021 - Aug 2021</span> 
                    </div>
                    <div className='text-white'>
                    I interned at the SaaS company WeMapSales over the previous summer. I was responsible for improving the backend/frontend of the company's website, which ran on PHP-based WordPress. I created a more intuitive layout for the frontend (using JS/CSS), and then improved page load-times by over 3 seconds (60% faster).
                    </div>
                
                    

                </div>


                <div className='float-right flex justify-center'>
                    <img src={nasa} className="block rounded-full max-w-full h-auto align-middle" width='200px' height='200px'></img>
                </div>

            </div>



        </div>
        </div>
    );

}

export default Experience;