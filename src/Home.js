import React, { Component } from 'react'
import Sign from './Sign'
import Tamthur from './images/ArthurAndTammy.JPG'
import './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="Home_Cont">
        <img src={Tamthur} alt="Two beautiful humans" className="Home_Image" />
        <div className="Home_Text">
          <div className="Home_Welcome">Welcome</div>
          <div className="Home_OtherText">
            to our wedding website.
            <br/>
            We are very excited for our big day!
          </div>
        </div>
        <div className="Home_Sign">
          <Sign />
        </div>
      </div>
    )
  }
}
