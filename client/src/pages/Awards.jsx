import React, { Component } from 'react';

import '../components/awards/awards.css';
import AwardHeader from '../components/awards/Header';
import AwardCom from '../components/awards/Awards';
import FooterCom from '../components/home/Footer';

export default class Awards extends Component {
  render() {
    return (
      <div>
        <AwardHeader />
        <AwardCom />
        <FooterCom parent={ this.props }/>
      </div>
    )
  }
}
