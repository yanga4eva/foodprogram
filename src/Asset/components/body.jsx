import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import PersonRegistration from './personRegistration'
import {Container} from 'react-bootstrap'
import Header from './kioskHeader'

class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Header />
            <Container>
            </Container>
            </>
         );
    }
}
 
export default Body;