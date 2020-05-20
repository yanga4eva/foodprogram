import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class ButtonComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <Button onClick={ () => this.appendInput()} variant='success'>FamilySearch </Button>
         );
    }
}
 
export default ButtonComponent;