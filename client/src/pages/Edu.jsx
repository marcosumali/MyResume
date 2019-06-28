import React, { Component } from 'react';

import '../components/edu/edu.css';
import EduHeader from '../components/edu/Header';
import EducationCom from '../components/edu/Education';

export default class Edu extends Component {
  render() {
    return (
      <div>
        <EduHeader />
        <EducationCom />
      </div>
    )
  }
}
