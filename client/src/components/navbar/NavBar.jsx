import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar brand={<a >Hello</a>} alignLinks="right">
          <NavItem href="">
          Getting started
          </NavItem>
          <NavItem href="components.html">
          Components
          </NavItem>
        </Navbar>
      </div>
    )
  }
}
