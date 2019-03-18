import React, { Component } from 'react'
import check from './check.png'
import './RSVP.scss'
import Modal from './Modal'
import Message from './Message'

export default class RSVP extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accept: false,
      decline: false,
      guest: false,
      firstName: '',
      lastName: '',
      message: '',
      rsvp: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleFirst = this.handleFirst.bind(this)
    this.handleLast = this.handleLast.bind(this)
    this.submitRSVP = this.submitRSVP.bind(this)
  }

  componentDidMount() {
    //check if already rsvp'ed on device
    const rsvp = localStorage.getItem('rsvp')
    this.setState({ rsvp })
    if (rsvp) {
      setTimeout(() => {
        this.props.history.replace('/')
      }, 5000)
    }
  }

  handleClick(evt) {
    let cn = evt.target.className
    let section = cn.slice(cn.indexOf(' ') + 1, cn.length)

    if (section === 'accept') {
      if (!this.state.accept) {
        this.setState({ accept: true, decline: false })
      }
    }

    if (section === 'decline') {
      if (!this.state.decline) {
        this.setState({ accept: false, decline: true, guest: false })
      }
    }

    if (section === 'guest') {
      if (!this.state.guest && this.state.accept) {
        this.setState({ guest: true })
      } else {
        this.setState({ guest: false })
      }
    }
  }

  handleFirst(evt) {
    this.setState({ firstName: evt.target.value })
  }

  handleLast(evt) {
    this.setState({ lastName: evt.target.value })
  }

  submitRSVP() {
    const { firstName, lastName, accept, guest } = this.state
    const ID = 'AKfycbxd6WLE_mm_EuGt8yeG6g5wZBZXyVpKr2szQyZdIcMXIjJXciwI'
    const key = 'abcdef'
    const d = new Date()
    const date = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`
    let attending
    if (firstName && lastName) {
      //get guest count
      //attending
      if (accept) {
        if (guest) attending = 2
        else attending = 1
      } else {
        //not attending
        attending = 0
      }

      let req = `https://script.google.com/macros/s/${ID}/exec?key=${key}&first=${firstName}&last=${lastName}&attending=${attending}&timestamp=${date}`

      //disable submit button
      this.setState({ accept: false, decline: false })

      fetch(req)
        .then(() => {
          //save rsvp variable to local storage to prevent rsvp'ing multiple times
          localStorage.setItem('rsvp', true)
          this.setState({ message: 'success' }, () => {
            setTimeout(() => {
              this.props.history.replace('/')
            }, 5000)
          })
        })
        .catch(err => {
          this.setState({ message: 'error' }, () => {
            setTimeout(() => {
              this.setState({ message: '' })
            }, 5000)
          })
        })
    }
  }

  render() {
    const {
      firstName,
      lastName,
      accept,
      decline,
      guest,
      message,
      rsvp
    } = this.state
    let msg

    if (message === 'error') {
      msg = (
        <Modal>
          <Message
            line1="There was an issue with your RSVP."
            line2="Please try again later."
          />
        </Modal>
      )
    } else {
      if (message === 'success' || rsvp) {
        msg = (
          <Modal>
            <Message line1="Your RSVP has been submitted." line2="Thank you!" />
          </Modal>
        )
      }
    }

    return (
      <React.Fragment>
        {msg}
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
                  value={firstName}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  onChange={this.handleLast}
                  value={lastName}
                />
              </form>
              <div className="RSVP-option">
                <div className="RSVP-option-question">Accept with pleasure</div>
                <div
                  className="RSVP-option-answer accept"
                  onClick={this.handleClick}
                >
                  {accept ? (
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
                  {decline ? (
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
                  {guest ? (
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
          {(accept || decline) && (firstName && lastName) ? (
            <div className="RSVP-submit" onClick={this.submitRSVP}>
              Submit Response
            </div>
          ) : (
            <div className="RSVP-submit disabled">Submit Response</div>
          )}
        </div>
        <div className="RSVP-disclaimer">
          *The wedding is an adults only event.
        </div>
      </React.Fragment>
    )
  }
}
