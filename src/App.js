import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from './Navbar.js';
import profilePic from './profileImg.png';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src = {profilePic}/>
        <h1>Nikhil Narvekar</h1>
        <h2>Tagline</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
        </p>
      </header>
    </div>
  );
}

export default App;
