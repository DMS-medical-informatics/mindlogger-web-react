import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import './App.css';
import NavBar from './components/NavBar';
import Login from './scenes/login';
import AppletList from './scenes/appletList';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <ReduxProvider store={reduxStore}>
    <NavBar/>
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
