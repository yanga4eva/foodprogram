import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, NavbarBrand, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Jumbotron from './jumbotron'
import logo from '../img/fs-logo.png'

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
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
                        <Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>


<Jumbotron />
</>
        
             );
    }
}
 
export default Header;