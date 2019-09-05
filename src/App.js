import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './scenes/login';
import AppletList from './scenes/appletList';
import Activities from './scenes/activities';
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
    <div className="App">
      <NavBar/>
      <Router>
        <div>
          <Route path="/login" component={isLoggedIn ? RedirectToApplets : Login} />
          <Route path="/activities" component={isLoggedIn ? Activities : RedirectToLogin} />
          <Route path="/applets" component={isLoggedIn ? AppletList : RedirectToLogin} />
          <Route path="/" component={isLoggedIn ? RedirectToLogin : RedirectToLogin} />
        </div>
      </Router>
    </div>
  )
}

const mapStateToProps = state => ({
  user: userSelector(state),
});

export default connect(mapStateToProps, null)(App)
  