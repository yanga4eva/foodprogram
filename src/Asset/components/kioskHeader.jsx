import React, { Component } from 'react';
import { Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Kbanner from './kbanner'
import logo from '../img/logo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Kheader extends Component {
    state = {  }
    render() { 
        return (
            <>
            <Navbar bg="light" expand="lg" >
				<Navbar.Brand href="#home">
                <img
                            src={logo}
                            width='400'
                            height='60'
                            className='d-inline-block align-top'
                            alt='familysearch logo'
                            />
                </Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#home"><Link to="/header">Home</Link></Nav.Link>
						<Nav.Link href="#link">People</Nav.Link>
                        <NavDropdown title="Parastatals" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Ministry</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Business</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Hospital</NavDropdown.Item>
                            </NavDropdown>
                        <NavDropdown title="Education" id="education-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Primary</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Secondary</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Tetiary</NavDropdown.Item>
                            </NavDropdown>    
					</Nav>
                    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
				</Navbar.Collapse>
			</Navbar>


<Kbanner />
</>
        
             );
    }
}
 
export default Kheader;