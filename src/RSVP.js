import React, { Component } from 'react';
import check from './check.png';
import './RSVP.scss';

export default class RSVP extends Component {
  constructor(props) {
    super(props);
    this.state = { accept: false, decline: false, guest: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    let cn = evt.target.className;
    let section = cn.slice(cn.indexOf(' ') + 1, cn.length);
    // if (this.state[section]) this.setState({ [section]: false });
    // else this.setState({ [section]: true });

    if (section === 'accept') {
      if (this.state.accept) {
        this.setState({ accept: false, decline: true, guest: false });
      } else {
        this.setState({ accept: true, decline: false });
      }
    }
  }

  render() {
    console.log(this.props.match.params.name);
    return (
      <div className="RSVP-cont">
        <div className="RSVP-header">
          You're invited to the wedding of
          <div className="RSVP-name">Tammy Sallady</div>
          <div className="RSVP-and">and</div>
          <div className="RSVP-name">Arthur Pungprakearti</div>
        </div>
        <div className="RSVP-end">Please RSVP by {this.props.endDate}</div>
        <div className="RSVP-options-cont">
          <div className="RSVP-options-box">
            <div className="RSVP-option">
              <div className="RSVP-option-question">Accept with pleasure</div>
              <div
                className="RSVP-option-answer accept"
                onClick={this.handleClick}
              >
                {this.state.accept ? (
                  <img
                    src={check}
                    alt="check mark"
                    className="RSVP-click accept"
                    onClick={this.handleClick}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="RSVP-option">
              <div className="RSVP-option-question">Decline with regret</div>
              <div
                className="RSVP-option-answer decline"
                onClick={this.handleClick}
              >
                {this.state.decline ? (
                  <img
                    src={check}
                    alt="check mark"
                    className="RSVP-click decline"
                    onClick={this.handleClick}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="RSVP-option">
              <div className="RSVP-option-question">Bringing a guest?</div>
              <div
                className="RSVP-option-answer guest"
                onClick={this.handleClick}
              >
                {this.state.guest ? (
                  <img
                    src={check}
                    alt="check mark"
                    className="RSVP-click guest"
                    onClick={this.handleClick}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="RSVP-submit">Submit Response</div>
      </div>
    );
  }
}
