import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, NavbarBrand, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Jumbotron from './jumbotron'
import logo from '../img/fs-logo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component {
    state = {  }
    render() { 
        return (
            <>
            <Navbar bg="light" expand="lg" >
				<Navbar.Brand href="#home">
                <img
                            src={logo}
                            width='150'
                            height='40'
                            className='d-inline-block align-top'
                            alt='familysearch logo'
                            />
                </Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				{/* <Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Link to="/partypdf">Invite Friend</Link>
						<Nav.Link href="#link">Request Friends Surname</Nav.Link>
					</Nav>
				</Navbar.Collapse> */}
			</Navbar>


<Jumbotron />
</>
        
             );
    }
}
 
export default Header;