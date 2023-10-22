import './App.css'
import React, { Component } from 'react';
import LocalNavbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeCard from './Components/WelcomeCard';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
      <LocalNavbar/>
      <WelcomeCard/>
      <Footer/>
        </div>
    );
  }
}

export default App;
