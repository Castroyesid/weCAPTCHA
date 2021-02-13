import React from 'react';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        firstName: props.firstName,
        lastName: props.lastName,
        status: props.status
      }
    }
  }

  handleFirstNameChanged(event) {
    var customer        = this.state.customer;
    customer.firstName  = event.target.value;

    this.setState({ customer: customer });
  }

  handleButtonClicked() {
    console.log(this.state.customer);
  }

  render() {
    return (
      <div>

        <TextField id="outlined-basic" label="Enter Translation" variant="outlined" value={this.state.customer.firstName} onChange={this.handleFirstNameChanged.bind(this)}/>

        <hr/>
        <Button variant="outlined" onClick={this.handleButtonClicked.bind(this)}>
          Save Record
        </Button>
      </div>
    );
  }
}