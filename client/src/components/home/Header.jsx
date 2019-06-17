import React, { Component } from 'react';
import styled from 'styled-components';

import './home.css';
import NavBarCom from '../navbar/NavBar';
import media from '../media/queries';

const Title = styled.div`
  padding: 0 0 0 7.5%;
  color: var(--white);
  font-size: 80px;
  font-weight: bold;
  line-height: 1;
  margin-top: 80px;
  ${media.tablet`
    font-size: 60px;
    margin-top: 140px;
  `}
  ${media.phone`
    margin-top: 20px;
    font-size: 40px;
    padding: 0 0 0 5%;
  `}
`

const SubTitle = styled.div`
  padding: 0 0 0 7.5%;
  color: var(--white);
  font-size: 40px;
  font-weight: bold;
  line-height: 2;
  ${media.tablet`
    font-size: 30px;
  `}
  ${media.phone`
    font-size: 20px;
    padding: 0 0 0 5%;
  `}
`

const BtnWhite = styled.div`
  width: 140px;
  line-height: 50px;
  background-color: var(--white);
  border-radius: 5px;
  margin-bottom: 40px;

  &:hover {
    background-color: rgba(0,0,0,0.5);
  }

  ${media.tablet`
    width: 110px;
    line-height: 40px;
    margin: 0 5% 0 7.5%;
  `}
  ${media.phone`
    width: 90px;
    line-height: 40px;
    margin: 0 5% 0 5%;
  `}
`
const BtnTextGradient = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background: #08AFEA;
  background: -webkit-linear-gradient(bottom right, #08AFEA, #2AF598);
  background: -moz-linear-gradient(bottom right, #08AFEA, #2AF598);
  background: linear-gradient(to top left, #08AFEA, #2AF598);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${media.tablet`
    font-size: 17.5px;
  `}
  ${media.phone`
    font-size: 14px;
  `}
`

const Paragraph = styled.div`
  padding: 0 0 0 7.5%;
  width: 500px;
  font-size: 16px;
  color: var(--white);
  margin-bottom: 20px;
  ${media.tablet`
    font-size: 15px;
    width: 450px;
    margin-top: 20px;
  `}
  ${media.phone`
    width: 300px;
    font-size: 12px;
    padding: 0 0 0 5%;
    margin-bottom: 0px;
  `}
`

export default class Header extends Component {
  render() {
    return (
      <div>
        <header id="HomeHeader" className="row No-margin No-padding">
          <div className="col s12">
            <NavBarCom />
          </div>
          <div className="col l7 m12 s12">
            <div className="col s12 No-margin No-padding">
              <Title>Hi, I'm Marco</Title>
            </div>
            <div className="col s12 No-margin No-padding">
              <SubTitle>Welcome To My Personal Website</SubTitle>
            </div>
            <div className="col s12 No-padding Container-nowrap-center-cross" style={{ marginBottom: '30px'}}>
              <a href="#Section" style={{ margin: '0 0 0 7.5%' }}>
                <BtnWhite>
                  <BtnTextGradient>Learn More</BtnTextGradient>
                </BtnWhite>
              </a>
              <a href="https://www.linkedin.com/in/marcosumali/" target="_blank" rel="noopener noreferrer">
                <img 
                  className="Linkedin-logo" 
                  src={ process.env.PUBLIC_URL + 'assets/img/linkedin-logo.png' } 
                  alt="linkedin"
                />
              </a>
            </div>
            <div className="col s12 No-margin No-padding">
              <Paragraph>I consider myself as a JavaScript Padawan exploring Social Enterprise with deep interest in Data Science using Python.</Paragraph>
            </div>
            <div className="col s12 No-margin No-padding">
              <Paragraph>I used to be a Certified Public Accounted at a Big Four Accounting firm handling assurance assignments from various multi national companies.</Paragraph>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/marcosumali/" target="_blank" rel="noopener noreferrer">
            <div className="col l5 m12 s12 Linkedin-mas-box">
                <img className="Linkedin-mas" src={ process.env.PUBLIC_URL + 'assets/img/linkedin-mas.png' } alt="Linkedin"/>
            </div>
          </a>
        </header>
      </div>
    )
  }
}
