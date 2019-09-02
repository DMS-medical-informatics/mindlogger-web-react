import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { clearUser } from '../state/user/user.actions';

class NavBar extends Component {
  render() {
    const { clearUser } = this.props;
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">MindLogger</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link onClick={clearUser} href="/login">Log Out</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

const mapDispatchToProps = {
  clearUser,
};

export default connect(null, mapDispatchToProps)(NavBar);
