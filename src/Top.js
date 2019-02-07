import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Top extends Component {
  render() {
    return (
      <div className="Top-cont">
        Tammy and Arthur
        <div className="Top-navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/venue">Venue</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    );
  }
}
