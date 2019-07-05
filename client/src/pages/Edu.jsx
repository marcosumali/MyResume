import React, { Component } from 'react';

import '../components/edu/edu.css';
import EduHeader from '../components/edu/Header';
import EducationCom from '../components/edu/Education';
import FooterCom from '../components/home/Footer';

export default class Edu extends Component {
  render() {
    return (
      <div>
        <EduHeader />
        <EducationCom />
        <FooterCom parent={ this.props }/>
      </div>
    )
  }
}
