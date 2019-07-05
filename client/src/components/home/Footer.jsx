import React, { Component } from 'react';
import styled from 'styled-components';
import { Toast } from 'react-materialize';
import { Link } from 'react-router-dom';

import media from '../media/queries';

const FooterTextLeft = styled.div`
  padding-right: 5%;
  font-size: 15px;
  font-weight: bold;
  color: var(--black);
  ${media.tablet`
  `}
  ${media.phone`
    font-size: 12px;
  `}
`

const FooterTextRight = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: var(--black);
  ${media.tablet`
  `}
  ${media.phone`
    font-size: 12px;
  `}
`

export default class Footer extends Component {
  render() {
    let { match } = this.props.parent
    return (
      <footer className="Footer row Container-wrap-center-cross">
        <div className="col m6 s12 Container-nowrap-center-cross">
          <FooterTextLeft>
            {
              match.path === "/" ?
              <a href="#HomeHeader" style={{ color: 'black', textDecoration: 'none' }}>MBB.</a>
              :
              <Link to="/">
                <div style={{ color: 'black', textDecoration: 'none' }}>MBB.</div>
              </Link>
            }
          </FooterTextLeft>
          <div style={{ minWidth: '200px' }}>
            <FooterTextLeft>© 2019 MadeByBastian.co</FooterTextLeft>
          </div>
        </div>
        <div className="col m6 s12 Container-nowrap-end">
          <FooterTextRight>
            <a href="mailto:support@madebybastian.co" style={{ color: 'black', textDecoration: 'none' }}>Help Center</a>
          </FooterTextRight>
          <Toast options={{html: 'Free to use !'}}>
            <FooterTextRight>Terms</FooterTextRight>
          </Toast>
          <Toast options={{html: 'Your privacy is our concerned.'}}>
            <FooterTextRight>Privacy</FooterTextRight>
          </Toast>
        </div>
      </footer>
    )
  }
}
