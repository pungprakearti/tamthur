import React, { Component } from 'react'
import legends from './images/legends3.jpeg'
import './Venue.scss'

export default class Venue extends Component {
  render() {
    return (
      <div className="Venue_Cont">
        <img
          src={legends}
          alt="Legends of Bennett Valley"
          className="Venue_Image"
        />
        <div className="Venue_Address">
          3328 Yulupa Ave, Santa Rosa, CA 95405
        </div>
      </div>
    )
  }
}
