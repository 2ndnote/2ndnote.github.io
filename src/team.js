import React, { Component } from 'react';
import './bootstrap.css';
import './app.css';
import cynthia from './img/cynthia.png'
import emily from './img/emily.png'

class App extends Component {
  render() {
    return (
    <div class="container-fluid" id = "team">
      <div class="row">
        <div class="col-md-offset-2 col-md-8 col-sm-12 text-center">
          <h1 class = "header">About Us</h1>
        </div>
        <div class="col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <img src={cynthia} height = "400px" width = "400px" class="img-responsive center-block" alt="team img"/>
          <h4 class = "team-header">Cynthia Liu</h4>
          <h3 class = "team-subheader">Founder</h3>
          <p class = "team-statement">Cynthia is responsible for communicating with donors, sponsors, and school administrators. She also does donation collections and distributions, as well as volunteer recruiting.</p>
          <p class = "team-statement">Cynthia is currently a senior at Palo Alto High School. She is lots of experience with teaching and supporting teachers-in-need: she was an intern at the Boys and Girls Club of the Peninsula (Brentwood site), a teacher for Connexpedition (a program which allowed her to teach impoverished children English in New Taipei), and a counselor at the Wisdom Culture Education Organization summer camp.</p>
        </div>
        <div class="col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
          <img src={emily} height = "400px" width = "400px" class="img-responsive center-block" alt="team img"/>
          <h4 class = "team-header">Emily Yu</h4>
          <h3 class = "team-subheader">Founder, Web</h3>
          <p class = "team-statement">Emily is responsible for developing and maintaining the website for 2ndNote. She also recruits volunteers, does donor outreach, donation collections and distributions, as well as manages web communications.</p>
          <p class = "team-statement">Emily is currently a senior at Palo Alto High School, and was a coach for Jordan Middle School's Science Olympiad Club. Aside from schoolwork, she also enjoys programming side projects in her spare time and blogging on Medium.</p>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
