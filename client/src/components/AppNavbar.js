import React, { Component } from 'react';
import{
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import Navbar from 'reactstrap/lib/Navbar';
import { Spinner } from 'reactstrap';
class AppNavbar extends Component{

    state = {
        isOpen: true
    }

    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">StoicLane</NavbarBrand>
                        <Spinner style={{ width: '0.5rem', height: '.1rem' }} />{''}
                        <Spinner style={{ width: '1.5rem', height: '.1rem' }} type="grow"/>{''}
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className = "ml-auto" navbar>
                                <NavLink href="http://github.com/ifejibola">Github</NavLink>
                                <NavLink href="http://github.com/ifejibola">LinkedIn</NavLink>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar;