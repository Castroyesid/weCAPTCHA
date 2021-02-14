import React from 'react';
import { Button } from '@material-ui/core'
import logo from './logo.svg';
import './App.css'
import NavBar from './components/NavBar.css';
import ReactDOM from 'react-dom';
import ShowImage from './components/image-scroll/image-scroll';
import NameForm from './components/image-scroll/form/form'
import Header from './components/Header/Header'

function LearnALanguage(){
  console.log("Let's Learn a Language!");
}

function InputATranslation(){
  console.log("Input your Translation");
}

function UploadAnImage(){
  console.log("Upload the image and caption");
}

function AboutTheTeam(){
  console.log("Learn about the Treehacks Team who did this");
}

function ContactUs(){
  console.log("What's Wrong Now?");
}

class Navbar extends React.Component{
  render() {
      return (
          <div>
            <ul id="nav">
              <li><a href="#"><Button variant="outline" onClick = {LearnALanguage}>Learn a Language</Button></a></li>
              <li><a href="#"><Button variant="outline" onClick = {InputATranslation}>Input a Translation</Button></a></li>
              <li><a href="#"><Button variant="outline" onClick = {UploadAnImage}>Upload an Image</Button></a></li>
              <li><a href="#"><Button variant="outline" onClick = {AboutTheTeam}>About the Team</Button></a></li>
              <li><a href="#"><Button variant="outline" onClick = {ContactUs}>Contact Us</Button></a></li>
            </ul>
          </div>
      );
  }
}

function Translate() {
  return (
    <div className="App">
      
      <div className="buttAlign">
        <Header />
        <ShowImage />
        <NameForm />
      </div>
    </div>
  );
}

class App extends React.Component {
render () {
  return (
    <div>
      <Navbar />
      <div className="buttAlign">
        <ShowImage />
      </div>
    </div>
  )
}
}


export default App;
