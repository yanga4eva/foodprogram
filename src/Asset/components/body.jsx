import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import NameInput from './nameinput'
import PersonRegistration from './personRegistration'
import {Container, Jumbotron} from 'react-bootstrap'
import Header from './kioskHeader'

class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Header />
            <Container>
                <PersonRegistration />
            </Container>
            </>
         );
    }
}
 
export default Body;