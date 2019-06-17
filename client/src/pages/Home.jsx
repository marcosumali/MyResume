import React, { Component } from 'react';

import HomeHeaderCom from '../components/home/Header';
import SectionCom from '../components/home/Section';
import FooterCom from '../components/home/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeaderCom />
        <SectionCom />
        <FooterCom />
      </div>
    )
  }
}
