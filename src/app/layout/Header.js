import React, { Component } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Container from 'react-bulma-components/lib/components/container';
import Button from 'react-bulma-components/lib/components/button';
import logo from './header/lock-logo.svg'

class Header extends Component {
  state = { isActive: false }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  auth = () => {
    fetch('https://sigsecdev.0x99.net/api/google/auth')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if(json.success) {
          const authWindow = window.open(json.auth_url, "", 'height=600,width=450');
          if (window.focus) {
            authWindow.focus();
          }
        }
      })
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
          <Navbar.Container position="end">
            <Button.Group>
              <Button renderAs='a' color='primary' onClick={this.auth}>Join</Button>
              <Button renderAs='a' onClick={this.auth}>Login</Button>
            </Button.Group>
          </Navbar.Container>
        </Container>
      </Navbar>
    );
  }
}
 
export default Header;
