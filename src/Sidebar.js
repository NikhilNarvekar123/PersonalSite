import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faInstagram, faFigma } from "@fortawesome/free-brands-svg-icons"
import './Sidebar.css' 

const Sidebar = () => {

    return(
    <>

        <div class="invisible sm:visible icon-bar">
            <a href='https://www.linkedin.com/in/nikhil-narvekar-28117a15b/' target='blank'><FontAwesomeIcon icon={faLinkedin} size="2x" color='#5271ff'/></a>
            <a href='https://github.com/NikhilNarvekar123' target='blank'><FontAwesomeIcon icon={faGithub} size="2x" color='#5271ff'/></a>
            <a href='mailto:nikhil.narvekar.712@gmail.com' target='blank'><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" color='#5271ff'/></a>
        </div>

    </>
    );

}

export default Sidebar;