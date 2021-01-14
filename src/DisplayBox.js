import React from 'react';



const DisplayBox = (props) => {

    let classTxt = '';
    classTxt = 'rounded-md ' + props.color + ' w-9/12 max-w-xs my-5 flex flex-wrap space-x-1 space-y-1 py-2 px-2';

    return(
        <>
        
        <div className={classTxt} >
            {props.children}
        </div> 
        
        </>
    );




}

export default DisplayBox;
