import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">TooDoo</header>
        <Switch>
          <Route exact path="/auth">
            <h1>auuuuuuuth</h1>
          </Route>

          <Route exact path="/todo">
            <h1>toodlydoo</h1>
          </Route>

          <Route exact path="/">
            <h1>
              a redirect to wherever is appropriate, either auth or todo depending on if logged in,
              will live here
            </h1>
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
