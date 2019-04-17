import React, { Component } from 'react'
import './Registry.scss'

export default class Registry extends Component {
  render() {
    return (
      <div className="Registry_Cont">
        <div className="Registry_Text">
          We have been together for 22 years! Between the two of us and our family, we have pretty much all we need.  That being said...
          <br/>
          <br/>
          <img src="https://media.giphy.com/media/1jQhFdU2XHYD6/giphy.gif"
            alt="money"
            className="Registry_Image"
          />
          <br/>
          <br/>
          Now that Tammy is ok with flying, we are just starting to explore the world beyond California.  We are going to Hawaii for our honeymoon, it will be the farthest Tammy has been on a plane! We hope to travel to Mexico and around the country just to start.  If you are inclined to give us a gift, please consider contributing to our travel fund!  
        </div>
      </div>
    )
  }
}
