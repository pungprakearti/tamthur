import React, { Component } from 'react'
import './FourOhFour.scss'

export default class FourOhFour extends Component {
  componentDidMount(){
    setTimeout(() => {
      this.props.history.replace('/')
    }, 5000)
  }
  render() {
    return (
      <div className="FourOhFour_Cont">
        <div className="FourOhFour_Whoops">Whoops!</div>
        I think you typed the wrong address.
        <br />
        I'll redirect you.
      </div>
    )
  }
}
