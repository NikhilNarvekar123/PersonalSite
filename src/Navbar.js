import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Navbar.css';
import logo from './logo2.png';


export class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
        this.toggleHidden = this.toggleHidden.bind(this);
    }

    toggleHidden()
    {
        this.setState({isHidden: !this.state.isHidden});
    }

    render() {


        return(
            <nav class="flex items-center justify-between flex-wrap p-6" style={{backgroundColor: '#5271ff'}}>
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img class='fill-current h-8 w-8 mr-2' width='70' height='70' viewBox="0 0 54 54" src={logo}></img>
                <span class="font-semibold text-xl tracking-tight">Nikhil Narvekar</span>
            </div> 
            {!this.state.isHidden &&
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={this.toggleHidden}>
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
            }
            {!this.state.isHidden && 
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class=".text-center block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
                    About
                </a>
                <a href="#responsive-header" class=".text-center block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white">
                    Education
                </a>
                <a href="#responsive-header" class=".text-center block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
                    Skills
                </a>
                <a href="#responsive-header" class=".text-center block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white">
                    Experience
                </a>
                <a href="#responsive-header" class=".text-center block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white">
                    Projects
                </a>
                </div>
                {/* <div>
                <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Resume</a>
                </div> */}
            </div>
            }   
            <div class="block ">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={this.toggleHidden}>
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
          
            </nav>
        );
    }
}