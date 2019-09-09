import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { clearUser } from '../state/user/user.actions';
import { userSelector } from '../state/user/user.selectors';

const NavBar = ({ user, clearUser }) => {
  const isLoggedIn = (user && user !== '');
  if (isLoggedIn) {
    return (
      <Navbar bg="primary" variant="dark" fixed="top" className="NavBar">
        <Navbar.Brand href="/">MindLogger</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link onClick={clearUser} >Log Out</Nav.Link>
        </Nav>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="primary" variant="dark" fixed="top" className="NavBar">
        <Navbar.Brand href="/">MindLogger</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  user: userSelector(state),
});

const mapDispatchToProps = {
  clearUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
