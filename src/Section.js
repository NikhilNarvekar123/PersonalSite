import React from 'react';
import './Section.css';


export class Section extends React.Component {

    constructor(props){
        super(props);
    }


    render() {

        let elem;

        if(this.props.background.includes("/"))
            elem = {backgroundImage: this.props.background};
        else
            elem = {backgroundColor: this.props.background};

        return (
            <div style = {elem}>
                {this.props.children}
            </div>
        );
    }

}
