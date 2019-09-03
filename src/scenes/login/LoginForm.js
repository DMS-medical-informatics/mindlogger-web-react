import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../state/user/user.actions'
import api from '../../services/api';
import config from '../../config';



class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      isLoading: false,
      signInSuccessful: false
    };
  }
  onChangeUser = (e) => {
    this.setState({user: e.target.value})
  }
  onChangePass = (e) => {
    this.setState({pass: e.target.value})
  }
  onSubmit = (e) => {
    const { setUser } = this.props;
     e.preventDefault();
     this.setState({isLoading: true})
     api.signIn({ apiHost: config.defaultApiHost,
        user: this.state.user,
        password: this.state.pass }).then((resp) => {
        console.log(resp);
        setUser(this.state.user);
        this.setState({signInSuccessful: true})
     }).catch((err) => {
        console.log(err);
        this.setState({isLoading: false});
    });
  }
  render() {
    if (this.state.signInSuccessful) {
      return <Redirect to="/applets"/>
    }
    return (
      <Form onSubmit={this.onSubmit}>
        {(this.state.isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <React.Fragment>
            <Form.Group controlId="formGroupUser" onChange={this.onChangeUser}>
              <Form.Control type="user" placeholder="Enter Username" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Password" onChange={this.onChangePass}/>
            </Form.Group>
            <Button type="submit">Login</Button>
          </React.Fragment>
        ))}
      </Form>
    );
  }
}

const mapDispatchToProps = {
  setUser,
};

export default connect(null, mapDispatchToProps)(LoginForm);