import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import configureStore from './redux/ConfigureStore';
import { Provider as ReduxProvider } from 'react-redux';
//provider is a higher order component that  provides redux store data to child comps.


const store = configureStore();
//can pass default state for like getting state from
//server and initializing it otherwise we intialize in our reducer.for server side 
//rendering


ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);
