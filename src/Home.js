import React, { Component } from 'react'
import Sign from './Sign'
import './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="Home_Cont">
        <Sign />
      </div>
    )
  }
}
