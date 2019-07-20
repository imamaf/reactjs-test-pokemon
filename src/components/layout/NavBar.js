import React, { Component } from 'react';
import logo from './pokemon_logo.png';
import styled from 'styled-components';

export default class NavBar extends Component {
  render() {
    return (
        <div className="navbar-header">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
  }
}
