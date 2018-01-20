import React, { Component } from 'react';
import './bootstrap.css';
import './app.css';

class App extends Component {
  render() {
    return (
    <div class = "container-fluid">
      <div class="row">
        <div>
          <h1><center>Our Mission</center></h1>
        </div>
        <div data-wow-delay="0.3s">
          <p>Our mission is to broker public school teachers’ classroom needs to those with school and office surplus in an "earth-friendly" manner. Last year, we collected and cleaned close to 500 recorder instruments and provided them to three elementary schools in East Palo Alto. We also created a website for teachers who are seeking support, and match them with volunteers who employ various charitable vehicles to acquire the requested items.  Volunteers committed to help the teachers in the system will earn volunteer service hours. Anyone can volunteer!
          </p>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
