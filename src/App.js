import React from 'react'
import { Button } from '@material-ui/core'
import logo from './logo.png'
import './App.css'
import NavBar from './components/NavBar.css'
import ShowImage from './components/image-scroll/image-scroll.js'
import NameForm from './components/image-scroll/form/form'
import OutputPracticeFeed from './components/PracticeFeed.js'
import ImportPhoto from './components/ImportPhoto.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

class Navbar extends React.Component{
  render() {
      return (
        <Router>
          <div>
            <ul id="nav">
            <li><Link to="/PracticeFeed">Practice Feed</Link></li>
              <li><Link to="/InputATranslation">Input A Translation</Link></li>
              <li><Link to="/UploadAnImage">Upload An Image</Link></li>
              <li><Link to="/About">About The Team</Link></li>
              <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>

            <Switch>
            <Route path="/PracticeFeed">
              <PracticeFeed />
            </Route>

            <Route path="/InputATranslation">
              <InputATranslation />
            </Route>

            <Route path="/UploadAnImage">
              <UploadAnImage />
            </Route>

            <Route path="/About">
              <About />
            </Route>

            <Route path="/ContactUs">
              <ContactUs />
            </Route>
          </Switch>
          </div>
          </Router>
      );
  }
}

function PracticeFeed() {
  return (
      <div className="App">
        <h3>Practice those languages</h3>
        <OutputPracticeFeed />
      </div>
  );
}

function InputATranslation() {
  return (
    <div className="App">
      <h3>Input your Translation</h3>
      <ShowImage />
   </div>
  );
}

function UploadAnImage() {
  return (
    <div className="App">
      <h3>Select an image, and fill in captions</h3>
      <ImportPhoto />
    </div>
  );
}

function About() {
  return (
    <div className="App">
      <h1>About Page</h1>
      <h1>Welcome to weCAPTCHA!</h1>
        <img src={logo} alt="Logo"height={200} width={200}/>
        <h2>Why are we called weCAPTCHA?</h2>
        <p>reCAPTCHA stands for "Completely Automated Public Turing test to tell Computers and Humans Apart" </p>
        <p>but our team is aiming for a </p>
        <p>"Completely Automated Public Translation test to teach Computers and Humans Alike"</p>

        <h2>Our Goal:</h2>  
   </div>
  );
}

function ContactUs() {
  return (
    <div className="App">
      <h3>What's Wrong Now?</h3>
   </div>
  );
}


class App extends React.Component {
render () {
  return (
    <div>
      <Navbar />
      <div className="buttAlign">

      </div>
    </div>
  )
}
}


export default App;
