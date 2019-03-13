import React, { Component } from 'react'
import './Message.scss'

export default class Message extends Component {
  render() {
    return (
      <div className="Message__cont">
        <div className="Message__bg">
          <div className="Message__outer">
            <div className="Message__textCont">
              <div className="Message__text">
                {/* There was an issue with your RSVP. */}
                {this.props.line1}
                <br />
                <br />
                {/* Please try again later. */}
                {this.props.line2}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
