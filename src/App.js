import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { getUser } from './services/client.js';

import AuthPage from './components/AuthPage/AuthPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">TooDoo</header>
        <Switch>
          <Route exact path="/auth">
            <AuthPage />
          </Route>

          <Route exact path="/todo">
            <h1>toodlydoo</h1>
          </Route>

          <Route exact path="/">
            {getUser() ? <Redirect to="/todo" /> : <Redirect to="/auth" />}
          </Route>

          <Route path="*">
            <h1>whatcha lookin for exactly?? cuz its not here!!</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
