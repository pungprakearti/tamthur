import React, { Component } from 'react';
import check from './check.png';
import './RSVP.scss';

export default class RSVP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accept: false,
      decline: false,
      guest: false,
      firstName: '',
      lastName: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);
  }

  handleClick(evt) {
    let cn = evt.target.className;
    let section = cn.slice(cn.indexOf(' ') + 1, cn.length);

    if (section === 'accept') {
      if (!this.state.accept) {
        this.setState({ accept: true, decline: false });
      }
    }

    if (section === 'decline') {
      if (!this.state.decline) {
        this.setState({ accept: false, decline: true, guest: false });
      }
    }

    if (section === 'guest') {
      if (!this.state.guest && this.state.accept) {
        this.setState({ guest: true });
      } else {
        this.setState({ guest: false });
      }
    }
  }

  handleFirst(evt) {
    this.setState({ firstName: evt.target.value });
  }

  handleLast(evt) {
    this.setState({ lastName: evt.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <div className="RSVP-cont">
          <div className="RSVP-header">
            You're invited to the wedding of
            <div className="RSVP-name tammy">Tammy Sallady</div>
            <div className="RSVP-and">and</div>
            <div className="RSVP-name arthur">Arthur Pungprakearti</div>
          </div>
          <div className="RSVP-end">Please RSVP by {this.props.endDate}</div>
          <div className="RSVP-options-cont">
            <div className="RSVP-options-box">
              <form>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  onChange={this.handleFirst}
                  value={this.state.firstName}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  onChange={this.handleLast}
                  value={this.state.lastName}
                />
              </form>
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
        <div className="RSVP-disclaimer">
          *The wedding is an adults only event.
        </div>
      </React.Fragment>
    );
  }
}
