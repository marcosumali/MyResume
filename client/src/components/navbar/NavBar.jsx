import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar brand={<a href="/">MBB.</a>} alignLinks="right">
          <NavItem href="/experience">
            Experience
          </NavItem>
          <NavItem href="/education">
            Education
          </NavItem>
          <NavItem href="/awards">
            Awards
          </NavItem>
          <NavItem href="/contact">
            Contact
          </NavItem>
        </Navbar>
      </div>
    )
  }
}
