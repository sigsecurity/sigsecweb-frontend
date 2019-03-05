import React, { Component } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Container from 'react-bulma-components/lib/components/container';
import logo from './lock-logo.png'

class Header extends Component {
  state = { isActive: false }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }
  render() { 
    return ( 
      <Navbar fixed='top'>
        <Container>
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
              <img src={logo} height='28' alt=''/>
              ACM SIG-Security
            </Navbar.Item>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
 
export default Header;
