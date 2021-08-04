import React from 'react';



const Badge = (props) => {
    return(
        <a 
            class="inline-block rounded-md text-white 
                text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
            style={{backgroundColor: '#417FFF', fontFamily: 'Cabin', fontWeight: 400}}
        >
            {props.topic}
        </a>
    );
}

const OpenIcon = (props) => {
    return(
        <a href={props.link} target='blank'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
    )
}

const CodeIcon = (props) => {
    return(
        <a href={props.link} target='blank'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        </a>
    )
}

const LoadIcon = (props) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: 'white'}}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>  
    )
}


const Card = (props) => {

    const badges = props.badges ? props.badges.map((topic, i) => <Badge id={i} topic={topic}/>) : [];

    if(props.meta) {
        return(
            <div class="flex justify-center text-left items-center">
                <div class="mt-10 flex space-x-2">
                    <p class="text-gray-900 text-lg" style={{fontFamily: 'Cabin', fontWeight: 500, color: 'white'}}>
                        {props.description}
                    </p>
                    <LoadIcon/>
                </div>
            </div>
        )
    }

    return(
        <div class="flex justify-center text-left">
            <div class="p-3 pb-8 mt-10 max-w-xs rounded bg-white">
            
                <div class='grid grid-cols-3 gap-1'>
                    <div class="col-span-2 font-semibold text-lg mb-2 ml-2 text-gray-900">
                        {props.name}
                    </div>
                    <div class='p-0 m-0 flex justify-end space-x-4'>
                        {props.codelink && <CodeIcon link={props.codelink}/>}
                        {props.viewlink && <OpenIcon link={props.viewlink}/>}
                    </div>
                </div>

                <div class='grid grid-rows-3 h-full'>
                    <div class="my-2 mx-2 row-span-2">
                        <p class="text-gray-900 text-sm" style={{fontFamily: 'Cabin', fontWeight: 500}}>
                            {props.description}
                        </p>
                    </div>
                    <div className='row-span-1'>
                        <hr class="border-0 bg-gray-500 h-px mx-2 mb-2  "/>
                        <div class='mx-2'>
                            {badges}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}



export default Card;