import React, { Component } from 'react'
import Sign from './Sign'
import './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="Home_Cont">
        Welcome to our wedding website.
        <br/>
        We are very excited for our big day!
        <br/>
        <br/>
        <Sign />
      </div>
    )
  }
}
