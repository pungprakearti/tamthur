import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Top from './Top'
import RSVP from './RSVP'
import Home from './Home'
import Venue from './Venue'

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
    return (
      <div className="App">
        <Top date={this.state.date} venue={this.state.venue} />

        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/venue" render={() => <Venue />} />
          <Route exact path="/registry" render={() => 'registry'} />
          <Route exact path="/contact" render={() => 'contact'} />
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
    )
  }
}

export default App
