import axios from 'axios'
import logo from './logo.png'
import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

class ImportPhoto extends Component {
  
    state = {
      // Initially, no file is selected
      selectedFile: null
    };
    
    // On file select (from the pop up)
    onFileChange = event => { 
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });    
    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {   
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    
      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };
    
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
    
      if (this.state.selectedFile) {
         
        return (
          <div>
            <h2>File Details:</h2>
             
<p>File Name: {this.state.selectedFile.name}</p>
 
             
<p>File Type: {this.state.selectedFile.type}</p>
 
             
<p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
 
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Complete all steps before Pressing the Upload button</h4>
          </div>
        );
      }
    };
    
    render() {
    
      return (
        <div>
            <img src={logo} alt="Logo"height={200} width={200}/>
            <h3>Please select an Image to upload</h3>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}

          <TextField id="outlined-basic" label="Enter English Caption" variant="outlined" />

          <TextField id="outlined-basic" label="Enter Translation" variant="outlined"/>
        </div>
      );
    }
  }
 
  export default ImportPhoto ;