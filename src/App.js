import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './scenes/login';
import AppletList from './scenes/appletList';
import { userSelector } from './state/user/user.selectors';

const RedirectToLogin = () => {
  return (
    <Redirect to="/login"/>
  )
}
const RedirectToApplets = () => {
  return (
    <Redirect to="/applets"/>
  )
}

const App = ({ user }) => {
  const isLoggedIn = (user && user !== '');
  return (
    <React.Fragment>
      <NavBar/>
      <Router>
        <div>
          <Route path="/login" component={isLoggedIn ? RedirectToApplets : Login} />
          <Route path="/applets" component={isLoggedIn ? AppletList : RedirectToLogin} />
          <Route path="/" component={isLoggedIn ? RedirectToApplets : RedirectToLogin} />
        </div>
      </Router>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  user: userSelector(state),
});

export default connect(mapStateToProps, null)(App)
  