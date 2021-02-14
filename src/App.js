import React from 'react';
import { Button } from '@material-ui/core'
import logo from './logo.svg';
import './App.css'
import NavBar from './Components/NavBar.css';
import ReactDOM from 'react-dom';
import ShowImage from './Components/image-scroll/image-scroll';
import NameForm from './Components/image-scroll/form/form'
import Header from './Components/Header/Header'

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

class App extends React.Component {
render () {
  return (
    <div>
      <Navbar/>
      <div>
        <ShowImage />
        <NameForm />
      </div>
    </div>
  )
}
}

export default App;
