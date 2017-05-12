import React, { Component } from 'react';
import '../../styles/index.css';
import  'react-bootstrap';
import { Button,FormGroup,ControlLabel,FormControl,HelpBlock,ButtonToolbar,Col,bsStyle} from 'react-bootstrap';
import Popup from 'react-popup';

// import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

function FieldGroup({ id, label, help, ...props }) {
return (
  <FormGroup controlId={id} bsSize= "small">
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
)
}
class FloorType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floorType:{
        name:""
      }
    }

}






  close(){
      // widow.close();
      open(location, '_self').close();
  }


  render() {
    let {name}=this.state.floorType;

    return (
      <form>

      <FormGroup controlId="formControlsSelect">
      <Col componentClass={ControlLabel} sm={2}>
      Select Name </Col>

       <Col componentClass={ControlLabel} sm={5}>
      <FormControl componentClass="select" controlId="formControlsSelect" placeholder="select">
        <option value="select">Tyles</option>
        <option value="other">Cement</option>
      </FormControl>
      </Col>
    </FormGroup>
    <FormGroup>
     <Col smOffset={2} sm={10}>
          <ButtonToolbar>
            <Button bsStyle="danger">Create</Button>
            <Button bsStyle="default">Update</Button>
            <Button bsStyle="default">view</Button>
            <Button bsStyle="default">Close</Button>
          </ButtonToolbar>
          </Col>
          </FormGroup>
        </form>


          );
      }
}




export default FloorType;
