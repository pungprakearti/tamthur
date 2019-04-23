import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Top from './Top'
import RSVP from './RSVP'
import Home from './Home'
import Venue from './Venue'
import Registry from './Registry';
import FourOhFour from './FourOhFour';

class App extends Component {
  constructor(props) {
    super(props)
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
    }
  }

  render() {
    const { date, endDate, venue } = this.state
    return (
      <div className="App">
        <Top date={date} venue={venue} />

        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/venue" render={() => <Venue venue={venue} />} />
          <Route exact path="/registry" render={() => <Registry />} />
          {/* <Route exact path="/contact" render={() => 'contact'} /> */}
          <Route
            path="/rsvp"
            render={props => (
              <RSVP date={date} endDate={endDate} venue={venue} {...props} />
            )}
          />

          {/* 404 Page */}
          <Route render={(props) => <FourOhFour {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default App
