import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { Home } from './Home';
import { UserPage } from './modules/users/pages/user-list.page';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules/reducers';

const initialState = {};
const store = createStore(rootReducer, initialState);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/users" component={UserPage} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
