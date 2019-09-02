import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.css';
import './App.css';
import Login from './scenes/login';
import AppletList from './scenes/appletList';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <ReduxProvider store={reduxStore}>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">MindLogger</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/login">Log Out</Nav.Link>
      </Nav>
    </Navbar>
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/applets" component={AppletList} />
        <Route path="/" component={Login} />
      </div>
    </Router>
  </ReduxProvider>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
