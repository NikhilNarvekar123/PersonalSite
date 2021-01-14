import React, { useEffect, useState } from 'react';


const Badge = (props) => {
    return(
        <a href="#" class="inline-block rounded-full text-white 
        bg-blue-400 hover:bg-blue-500 duration-300 
        text-xs font-bold 
        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
        opacity-90 hover:opacity-100">
        {props.topic}
        </a>
    );
}


const Card = (props) => {


    const [badges, setBadges] = useState(null);

    useEffect(() => {
        setBadges(props.badges.map((topic, i) => <Badge id={i} topic={topic}/>));
    }, []);


    return(

        <div class="grid text-white ">

            <div class="bg-gray-800 rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-6">
                <div class="grid grid-cols-12 gap-3">

                    <div class="col-span-0 sm:col-span-2 text-center hidden sm:block">
                        <div className='flex object-contain justify-center items-center'>
                        <img src={props.children} className="w-40 rounded-full"></img>
                        </div>
                    </div>

                    <div class="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0 text-left">
                        
                        
                        <div class="grid block sm:hidden">
                            <div className='flex object-contain justify-center items-center'>
                                <img src={props.children} className="w-40 rounded-full"></img>
                            </div>
                        </div>

                        <div class="flex justify-between items-center hidden sm:block">
                            <span class="font-light text-gray-200">
                                {props.location}, {props.date}
                            </span>
                        </div>

                        <div class="mt-2">
                            <a href="https://www.lspace.asu.edu/" class="p-0 sm:text-sm md:text-md lg:text-lg font-bold hover:underline">
                            {props.title}
                            </a>

                            <p class="mt-2 text-gray-500 text-sm md:text-md">
                                {props.description}
                            </p>
                        </div>

                        <div class="grid grid-cols-2 mt-4 my-auto">
                            <div class="col-span-12 lg:col-span-8">
                                {badges}
                            </div>
                        </div>

                    </div>
                
                </div>
            </div>
        
        </div>

    );

}

export default Card;