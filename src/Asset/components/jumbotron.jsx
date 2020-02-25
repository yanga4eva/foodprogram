import React, { Component } from 'react';
import {Container, Jumbotron} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import NameInput from './nameinput'

class JumbotronHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Jumbotron fluid>
            <Container>
                <h1>Homeland Food Party Kit</h1>               
            </Container>
        </Jumbotron>
        </>
         );
    }
}
 
export default JumbotronHeader;