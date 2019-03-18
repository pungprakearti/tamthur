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
                {this.props.line1}
                <br />
                <br />
                {this.props.line2}
              </div>
            </div>
          </div>
          <div className="Message__redirect">
            Redirecting in 5 seconds or <a href="/">Click Here</a>
          </div>
        </div>
      </div>
    )
  }
}
