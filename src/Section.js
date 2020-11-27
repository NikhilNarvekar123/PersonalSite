import React from 'react';


const Section = (props) => {

    let topLine = true;
    let botLine = true;

    if(props.topEnabled){
        topLine = false;
    }
    if(props.bottomEnabled){
        botLine = false;
    }



    return(
        <>

        {topLine &&
        <div className='container w-40 mx-auto'>
            <hr class='dashed'></hr>
        </div>
        }
        
        <div className='container mx-auto py-10 justify-center'>
            {props.children}
        </div>

        {botLine &&
        <div className='container w-40 mx-auto'>
            <hr class='dashed'></hr>
        </div>
        }

        </>
    );


}


export default Section;