import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    </ReduxProvider>

  );
}

export default App;
