import React from 'react';

class Section extends React.Component{

    constructor(props){
        super(props);
    }


    render() {

        let divStyle = {
            height: this.props.height,
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

        if(this.props.color){    
            divStyle.backgroundColor = this.props.color;
        }
        if(this.props.image) {
            divStyle.backgroundImage = "url(" + this.props.image + ")";
        }


        return(
            <div style ={divStyle}>
                {this.props.children}
            </div>
        );
    }


}


export default Section;