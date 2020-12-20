import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingTop: 50,
  paddingRight: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {
  constructor(props){
     super(props);
     this.handleFormSubmit=this.handleFormSubmit.bind(this)
  
       
  }

  handleFormSubmit(e) {
    e.preventDefault();
   
    console.log("FORM SUBMIT!");

    const data = {"name": e.target.name.value, "zip":e.target.zipcode.value};
    console.log(data);

  }

  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
          <Form horizontal className="LoginForm" id="loginForm" onSubmit={this.handleFormSubmit}>
            <FormGroup controlId="formEmail">
              <FormControl type="number" placeholder="ZIP Code" name="zipcode" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="text" placeholder="Name" name="name" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Button bsStyle="primary" type="submit" >
                Get a Quote
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    )
  }
}

export default LoginForm;
