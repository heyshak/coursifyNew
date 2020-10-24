import React, { Component } from "react";
import cssClass from "./NavigationBar.module.css";

export default class Navigationbar extends Component {
  state = {
    isToggled: true,
  };

  onToggle = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };
  render() {
    return (
      <div className='my-3'>
        <nav className='navbar navbar-expand-lg font-weight-bold navbar-light '>
          <a className={`navbar-brand ml-5 ${cssClass.NavBrand}`} href='/'>
            Coursify
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded={!this.state.isToggled ? true : false}
            aria-label='Toggle navigation'
            onClick={this.onToggle}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={`${
              this.state.isToggled ? "collapse" : ""
            } navbar-collapse ml-5`}
            id='navbarNav'
          >
            <ul className='navbar-nav mr-5 ml-auto'>
              <li className='nav-item mx-3 font-weight-bold'>
                <a className='nav-link' href='/'>
                  Live Classes <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item mx-3 font-weight-bold'>
                <a className='nav-link' href='/'>
                  Video Library
                </a>
              </li>
              <li className='nav-item mx-3 font-weight-bold'>
                <a className='nav-link' href='/'>
                  Course
                </a>
              </li>
              <li className='nav-item mx-3 font-weight-bold'>
                <a className='nav-link ' href='/'>
                  Book
                </a>
              </li>
              <li className='nav-item mx-3 font-weight-bold'>
                <a className='nav-link ' href='/'>
                  Board
                </a>
              </li>
              <li className='nav-item mx-3 font-weight-bold'>
                <a className='nav-link ' href='/'>
                  Exams
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
