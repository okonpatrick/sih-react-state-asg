import './App.css'
import { Component } from 'react';
import LocalNavbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeCard from './Components/WelcomeCard';
import Footer from './Components/Footer';

class App extends Component {
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
