import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import roses from './white_roses.png';
import './Top.scss';

export default class Top extends Component {
  render() {
    return (
      <div className="Top-cont">
        <div className="Top-header-cont">
          <div className="Top-header">
            <img
              className="Top-roses"
              src={roses}
              alt="white vintage looking roses"
            />
            <div className="Top-header-text">
              Tammy<div className="Top-and">and</div>Arthur
            </div>
          </div>
          <div className="Top-date">{this.props.date}</div>
          <div className="Top-venue">{this.props.venue.name}</div>
        </div>
        <div className="Top-navbar">
          <div className="Top-navbar-text">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/venue">Venue</NavLink>
            <NavLink to="/registry">Registry</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
