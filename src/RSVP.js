import React, { Component } from 'react';

export default class RSVP extends Component {
  constructor(props) {
    super(props);
    this.state = { choice: null, guest: null };
  }

  render() {
    console.log(this.props.match.params.name);
    return (
      <div className="RSVP-cont">
        <div className="RSVP-header">
          You're invited to the wedding of
          <div className="RSVP-name">Tammy Sallady</div>
          and
          <div className="RSVP-name">Arthur Pungprakearti</div>
        </div>
        {/* {this.props.date}
        {this.props.address} */}
        <div className="RSVP-end">Please RSVP by {this.props.endDate}</div>
        <div className="RSVP-yesorno">
          <div className="RSVP-option">Accept with pleasure</div>
          <div className="RSVP-option">Decline with regret</div>
        </div>
        <div className="RSVP-option">Bringing a guest?</div>
        <button>Submit</button>
      </div>
    );
  }
}
