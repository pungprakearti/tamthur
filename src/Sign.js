import React, { Component } from 'react'
import leaf from './images/leaf.svg'
import './Sign.scss'

export default class Sign extends Component {
  render() {
    return (
      <div className="Sign_Cont">
        <div className="Sign_Header">AND I'D CHOOSE</div>
        <div className="Sign_You">
          <img src={leaf} alt="leaf" className="Sign_Leaf__left" />
          YOU
          <img src={leaf} alt="leaf" className="Sign_Leaf__right" />
        </div>
        <div className="Sign_Cursive">in a hundred</div>
        <div className="Sign_Serif">lifetimes</div>
        <div className="Sign_Cursive">in a hundred</div>
        <div className="Sign_Serif">worlds</div>
        <div className="Sign_InAny">in any version of</div>
        <div className="Sign_Serif">reality</div>
        <div className="Sign_Cursive">I'd find you</div>
        <div className="Sign_Header">AND I'D CHOOSE</div>
        <div className="Sign_You">
          <img src={leaf} alt="leaf" className="Sign_Leaf__left" />
          YOU
          <img src={leaf} alt="leaf" className="Sign_Leaf__right" />
        </div>
      </div>
    )
  }
}
