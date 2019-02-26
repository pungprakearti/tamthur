import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Top from './Top';
import RSVP from './RSVP';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'August 3rd, 2019',
      endDate: 'June 1st, 2019',
      venue: {
        name: 'Legends of Bennett Valley',
        street: '3328 Yulupa Avenue',
        city: 'Santa Rosa',
        state: 'California',
        zip: '95405'
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Top date={this.state.date} venue={this.state.venue} />

        <Switch>
          <Route exact path="/" render={() => 'home page'} />
          <Route exact path="/venue" render={() => 'venue'} />
          <Route exact path="/registry" render={() => 'registry'} />
          <Route exact path="/contact" render={() => 'contact'} />

          {/* rsvp isn't in the navbar because we don't want people inviting themselves */}
          {/* <Route
            path="/rsvp/:name"
            render={props => (
              <RSVP
                date={this.state.date}
                endDate={this.state.endDate}
                venue={this.state.venue}
                {...props}
              />
            )}
          /> */}

          <Route
            path="/rsvp"
            render={props => (
              <RSVP
                date={this.state.date}
                endDate={this.state.endDate}
                venue={this.state.venue}
                {...props}
              />
            )}
          />

          {/* 404 Page */}
          <Route render={() => '404'} />
        </Switch>
      </div>
    );
  }
}

export default App;
