import React, {useEffect, useState} from 'react';
import './Navbar.css';
import logo from './assets/LogoImg.png';
import Toggle from './components/Toggle';


const Navbar = () => {


    const [openMobile, setOpen] = useState(false);
    const [status, setStatus] = useState('hidden');


    useEffect(() => {
        if(openMobile)
            setStatus('');
        else
            setStatus('hidden');
    }, [openMobile]);

    return(
        
        // min-h-screen
        <div class="sticky z-50 top-0"> 
        <div class="antialiased bg-gray-100 dark-mode:bg-gray-900">
        <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        
            <div class="flex flex-row items-center justify-between p-4">

                <div class='flex flex-row items-center'>
                <img class='fill-current h-8 w-8 mr-2' width='70' height='70' viewBox="0 0 54 54" src={logo}></img>
                <a href="#about" class="text-lg font-semibold tracking-widest text-gray-900 rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Nikhil Narvekar</a>
                </div>

                <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpen(!openMobile)}>
                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                    {!openMobile &&
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    }
                    {openMobile && 
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    }
                    </svg>
                </button>

            </div>

            
            <nav className={'flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ' + status}>


                <div className='flex justify-start'>
                <a class="w-full flex justify-start px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#skills">Skills</a>
                </div>
                <div className='flex justify-start'>
                <a class="w-full flex justify-start px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#experience">Experience</a>
                </div>
                <div className='flex justify-start'>
                <a class="w-full flex justify-start px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#projects">Projects</a>
                </div>
                <div className='flex justify-start'>
                <a class="w-full flex justify-start px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#education">Education</a>
                </div>
                <div className='flex justify-start'>
                <a class="w-full flex justify-start px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#education">More</a>
                </div>
            
            </nav>

        </div>
        </div>
        </div>
        </div>  
    
    );

}


export default Navbar;
