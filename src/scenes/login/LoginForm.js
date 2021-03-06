import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser, setAuth } from '../../state/user/user.actions';
import { setApplets } from '../../state/user/user.actions';
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
    const { setUser, setAuth, setApplets } = this.props;
    e.preventDefault();
    this.setState({isLoading: true})
    api.signIn({ apiHost: config.defaultApiHost,
      user: this.state.user,
      password: this.state.pass
    }).then((resp) => {
      api.getAppletsForUser({
        apiHost: config.defaultApiHost,
        token: resp.data.authToken.token,
        user: resp.data.user._id,
        role: 'user'
      }).then((resp) => {
        console.log(resp);
        setApplets(resp.data)
      }).catch((resp) => {
        console.log(resp);
      })
      setUser(resp.data.user);
      setAuth(resp.data.authToken.token);
      this.setState({ signInSuccessful: true });
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
  setAuth,
  setApplets,
};

export default connect(null, mapDispatchToProps)(LoginForm);