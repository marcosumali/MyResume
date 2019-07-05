import React, { Component } from 'react';

import '../components/exp/exp.css';
import ExpHeaderCom from '../components/exp/Header';
import ExperienceCom from '../components/exp/Experience';
import FooterCom from '../components/home/Footer';

export default class Exp extends Component {
  render() {
    return (
      <div>
        <ExpHeaderCom />
        <ExperienceCom />
        <FooterCom parent={ this.props }/>
      </div>
    )
  }
}
