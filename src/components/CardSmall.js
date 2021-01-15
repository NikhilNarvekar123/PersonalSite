import React, {useState,useEffect} from 'react';



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



const CardSmall = (props) => {


    const [badges, setBadges] = useState(null);
    const [viewStatus, setView] = useState('mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none');
    const [codeStatus, setCode] = useState('mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none');

    useEffect(() => {
        setBadges(props.badges.map((topic, i) => <Badge id={i} topic={topic}/>));
        
        if(props.viewlink == ''){
            setView('mouse-pointer bg-gray-700 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none')
        }

        if(props.codelink == ''){
            setCode('mouse-pointer bg-gray-700 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none');
        }

    }, []);


    return(
        
        <div class="flex justify-center text-left">
            
            <div class="p-3 mt-10 max-w-xs w-xs cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
            <div class="font-semibold text-xl mb-2 ml-2 text-gray-900 dark:text-white">{props.name}</div>
            <div class="mt-0 py-2">
                <a href={props.viewlink} target='blank'
                class={viewStatus}>View</a>
                <a href={props.codelink} target='blank'
                class={codeStatus}>Code</a>
            </div>
            <div class="my-2 mx-2">
                <p class="text-gray-900 text-sm">
                {props.description}
                </p>
            </div>
            <div className='mx-2'>
                <div class="font-semibold text-l text-gray-900">Tech Stack:</div>
                <div>
                    {badges}
                </div>
            </div>
            </div>

        </div>      

    );


}


export default CardSmall;