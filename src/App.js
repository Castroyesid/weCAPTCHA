import React from 'react';
import { Button } from '@material-ui/core'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home/Home'
import MyForm from './components/MyForm.cs'
import { ReactComponent as Logo } from './logo.svg';
import ReactLogo from './Logo.png';
import Treehacks from './Treehacks.png'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CustomerForm from './components/CustomerForm.js';
import MyFormJS from './components/MyForm.js';



function handleNewButton(){
  console.log("Is this new thing working?");
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
    console.log("Is this button working?");
  }
  
  const classes = useStyles();
  return (
    <div className="App">

        <img src={ReactLogo} alt = 'website logo' />
        <h1> Treehacks Team 276 </h1>
        <h2> Prepared by: David Hiltzman</h2>
        <h1>Provide Translation for given image</h1>
        
        <MyFormJS/>

        <img src={Treehacks} alt = 'website logo' />
        
        <Home/>
    </div>
  );

}
export default App;
