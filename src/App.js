import React from 'react';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import { Link } from 'react-router-dom';
import configureStore from './store';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <Link to="/login">Login</Link>
        </header>
      </div>
    </ReduxProvider>

  );
}

export default App;
