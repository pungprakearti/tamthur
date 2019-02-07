import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Top from './Top';
import RSVP from './RSVP';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Switch>
          <Route exact path="/" render={() => 'home page'} />
          <Route exact path="/venue" render={() => 'venue'} />
          <Route exact path="/registry" render={() => 'registry'} />
          <Route exact path="/contact" render={() => 'contact'} />

          {/* rsvp isn't in the navbar because we don't want people inviting themselves */}
          <Route exact path="/rsvp" render={() => <RSVP />} />

          {/* 404 Page */}
          <Route render={() => '404'} />
        </Switch>
      </div>
    );
  }
}

export default App;
