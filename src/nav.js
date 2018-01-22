import React, { Component } from 'react';
import logo from './logo.svg';
import './bootstrap.css'
import './nav.css';

class App extends Component {
  render() {
    return (
    <div class="container nav" id = "menu">
      <div class="navbar-header">
        <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon icon-bar"></span>
          <span class="icon icon-bar"></span>
          <span class="icon icon-bar"></span>
        </button>
        <a href="#" class="navbar-brand">2NDNOTE</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#home" class="smoothScroll">HOME</a></li>
          <li><a href="#mission" class="smoothScroll">OUR MISSION</a></li>
          <li><a href="#team" class="smoothScroll">ABOUT US</a></li>
          <li><a href="#contact" class="smoothScroll">CONTACT</a></li>
        </ul>
      </div>
    </div>
    );
  }
}

export default App;
