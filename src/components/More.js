import React from 'react';


const More = () => {


    return(
        <div id='more' className='bg-indigo-700'>
        <div className='mx-5 sm:mx-20 xl:mx-64 flex flex-col py-10'>


            <div className='w-full flex justify-center sm:justify-start text-white text-2xl' style={{fontFamily:'Open Sans'}}>
                <span className='font-bold underline'>More</span> 
            </div>
            <br/>

            <div className='text-white text-md font-bold' style={{fontFamily:'Open Sans'}}>
                <div className='sm:flex sm:justify-start'>
                    Feel free to email me at &nbsp;<span className='text-orange-400'>nikhil.narvekar.712@gmail.com</span>
                    &nbsp; or &nbsp;<span className='text-orange-400'>npn190001@utdallas.edu</span>
                </div>
                <div className='sm:flex sm:justify-start'>
                    My UI/UX designs can be found &nbsp; <a href='https://figma.com/@nikhiln769' target='blank' className='px-0 text-orange-400'>here</a> 
                </div>
                <div className='sm:flex sm:justify-start'>
                    Just started building this site. More coming soon! 
                </div>
            </div>


        </div>
        </div>
    );


}


export default More;