import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Navbar.css';


export class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <a>Home</a>
                <a>Projects</a>
                <a>Skills</a>
                <a>Experience</a>
                <a>Education</a>
                <a>Misc.</a>
            </div>
        );
    }
}