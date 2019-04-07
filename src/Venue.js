import React, { Component } from 'react'
import legends from './images/legends3.jpeg'
import './Venue.scss'

export default class Venue extends Component {
  render() {
    const { name, street, city, state, zip } = this.props.venue
    return (
      <div className="Venue_Cont">
        <img
          src={legends}
          alt="Legends of Bennett Valley"
          className="Venue_Image"
        />
        <div className="Venue_AddressCont">
          <div className="Venue_AddressName">{name}</div>
          <div className="Venue_Address">
            {street}
            <br />
            {`${city}, ${state} ${zip}`}
          </div>
        </div>
      </div>
    )
  }
}
