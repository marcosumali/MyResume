import React, { Component } from 'react';
import styled from 'styled-components';

import NavBarCom from '../navbar/NavBar';
import media from '../media/queries';

const Title = styled.h1`
  color: var(--white);
  text-transform: uppercase;
  font-size: 100px;
  ${media.tablet`
    font-size: 80px;
  `}
  ${media.phone`
    font-size: 40px;
  `}
`

export default class Header extends Component {
  render() {
    return (
      <div>
        <header id="AwardHeader" className="row No-margin No-padding">
          <div className="col s12">
            <NavBarCom />
          </div>
          <div className="col s12 Title-box Container-nowrap-center">
            <Title>Awards</Title>
          </div>
        </header>
      </div>
    )
  }
}
