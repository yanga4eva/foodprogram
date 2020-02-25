import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import NameInput from './nameinput'
import {Container, Jumbotron} from 'react-bootstrap'
import Header from './header'

class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Header />
            <Container>
                <NameInput />
            </Container>
            </>
         );
    }
}
 
export default Body;