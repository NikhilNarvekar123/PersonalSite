import React, { useEffect, useState } from 'react';
import nasa from '../assets/nasaLogo.png';



const Badge = (props) => {
    return(
        <a class="inline-block rounded-full text-white 
        bg-blue-400 hover:bg-blue-500 duration-300 
        text-xs font-bold 
        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
        opacity-90 hover:opacity-100">
        {props.topic}
        </a>
    );
}

const NewCard = (props) => {


const [listElem, setList] = useState([]);
const [badges, setBadges] = useState(null);

useEffect( () => {

    setList(<ul class='list-disc list-inside '>{props.responsibilities.map((rep) => (<li>{rep}</li>))}</ul>);
    setBadges(props.badges.map((topic, i) => <Badge id={i} topic={topic}/>));
}, [])


return(


       
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">

            <div class="flex justify-center md:justify-center -mt-16">
                <img class="w-24 h-24 object-cover rounded-full" src={props.img}/>
            </div>

            <div class="mt-4">
                <p class="text-xl font-semibold my-4">{props.name}</p>
                
                <div class="flex space-x-2 text-gray-600 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p>{props.location}</p> 
                </div>

                <div class="flex space-x-2 text-gray-600 text-sm my-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>{props.date}</p> 
                </div>  
                
                <div class="border-t-2"></div>

                <div class="flex flex-col">
                    <div class='text-left font-semibold my-2'>
                        Tasks
                    </div>
                    <div class='text-left'>
                        {listElem}
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class='text-left font-semibold my-2'>
                        Technologies
                    </div>
                    <div class="grid grid-cols-2 mt-4 my-auto">
                            <div class="col-span-12 lg:col-span-8">
                                {badges}
                            </div>
                    </div>
                </div>

            </div>
        </div>
    
    
 
);
}

export default NewCard;