import React, { Component } from 'react';

export default class RSVP extends Component {
  render() {
    return (
      <div className="RSVP-cont">
        <h1>
          You're invited to the wedding of Tammy Sallady and Arthur
          Pungprakearti
        </h1>
        {this.props.date}
        {this.props.address}
        Please RSVP by {this.props.endDate}
        ____ Accept with pleasure ____ Decline with regret ____ Bringing a
        guest?
        <button>Submit</button>
      </div>
    );
  }
}
