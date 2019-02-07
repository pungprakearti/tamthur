import React, { Component } from 'react';
import './RSVP.scss';

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
        <div className="RSVP-end">Please RSVP by {this.props.endDate}</div>
        <div className="RSVP-options-cont">
          <div className="RSVP-options-box">
            <div className="RSVP-option">
              <div className="RSVP-option-question">Accept with pleasure</div>
              <div className="RSVP-option-answer">____</div>
            </div>
            <div className="RSVP-option">
              <div className="RSVP-option-question">Decline with regret</div>
              <div className="RSVP-option-answer">____</div>
            </div>
            <div className="RSVP-option">
              <div className="RSVP-option-question">Bringing a guest?</div>
              <div className="RSVP-option-answer">____</div>
            </div>
          </div>
        </div>
        <div>Submit Response</div>
      </div>
    );
  }
}
