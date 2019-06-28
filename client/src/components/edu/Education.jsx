import React, { Component } from 'react';
import styled from 'styled-components';

import media from '../media/queries1';

const Place = styled.div`
  color: var(--light-blue);
  font-weight: bold;
  font-size: 28px;
  ${media.large`
    font-size: 24px;
  `}
  ${media.small`
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
  `}
`

const Time = styled.div`
  color: var(--gray);
  font-weight: bold;
  font-size: 28px;
  ${media.large`
    font-size: 24px;
    color: var(--light-blue);
    text-align: right;
  `}
  ${media.medium`
    font-size: 24px;
    color: var(--gray);
    text-align: left;
  `}
  ${media.small`
    margin-top: 0px;
    font-size: 18px;
    text-align: center;
  `}
`

const Title = styled.div`
  color: var(--gray);
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 16px;
  ${media.large`
    font-size: 24px;
  `}
  ${media.medium`
  `}
  ${media.small`
    margin-top: 0px;
    font-size: 18px;
    text-align: center;
  `}
`

const ParagraphTitle = styled.div`
  color: var(--black);
  font-weight: bold;
  font-size: 24px;
  ${media.large`
  `}
  ${media.small`
    font-size: 18px;
  `}
`

const Paragraph = styled.div`
  color: var(--black);
  font-size: 18px;
  text-align: justify;
  margin-top: 8px;
  margin-bottom: 16px;
  ${media.large`
  `}
  ${media.small`
    font-size: 14px;
  `}
`

export default class Education extends Component {
  render() {
    return (
      <div className="row No-margin No-padding">
        <div className="col s12 Edu-box">
          <div className="col s12 m3 l4 xl2">
            <div className="col s12 xl12 Container-nowrap-center">
              <img className="Edu-image" src={ process.env.PUBLIC_URL + '/assets/img/hacktiv8.png' } alt="Education" />
            </div>
          </div>
          <div className="col s12 m9 l8 xl4">
            <div className="col xl12 No-margin No-padding Container-wrap-center-cross">
              <div className="col s12 l5 xl12">
                <Place>Hacktiv8 Indonesia</Place>
              </div>
              <div className="col s12 l7 xl12">
                <Time>December 2017 - June 2018</Time>
              </div>
              <div className="col s12 l12 xl12">
                <Title>Fullstack JavaScript Immersive Program</Title>
              </div>
            </div>
            <div className="col xl12 Project-box-first">
              <ParagraphTitle>Final Project : Radar Social</ParagraphTitle>
              <ParagraphTitle>Role : Team Leader</ParagraphTitle>
              <Paragraph>"Radar is a simplified social media monitoring tool where we build data analytic engines which incorporates data mining, data analysis and data visualization that delivers trend and sentiment analysis for brand management purposes in Indonesian market."</Paragraph>
            </div>
          </div>
          <div className="col m12 Project-box-second">
            <div className="col xl12">
              <ParagraphTitle>Final Project : Radar Social</ParagraphTitle>
              <ParagraphTitle>Role : Team Leader</ParagraphTitle>
              <Paragraph>"Radar is a simplified social media monitoring tool where we build data analytic engines which incorporates data mining, data analysis and data visualization that delivers trend and sentiment analysis for brand management purposes in Indonesian market."</Paragraph>
            </div>
          </div>
          <div className="col s12 m12 l12 xl6">
            <div className="col s12 m12 l12 xl12 Youtube-box">
              <iframe 
                title="FinalProject"
                className="Youtube-videos"
                src="https://www.youtube.com/embed/o93uOTb-Dv0" 
                frameBorder="0" 
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="col s12 m12 l12 xl12 Powerpoint-box">
              <iframe 
                title="FinalProject"
                className="Powerpoint"
                src="https://docs.google.com/presentation/d/e/2PACX-1vTtLfbcQ7MMFQgTQ6bhDoRd5J9CnfLlDpvUu3VFfefyG1YEvC3TxHhmxHyOJl0_ttUWY_ZMIanD2F8o/embed?start=false&loop=false&delayms=3000" 
                frameBorder="0" 
                width="960" 
                height="569" 
                allowFullScreen={true} 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col s12 Edu-box">
          <div className="col s12 m3 l4 xl2">
            <div className="col s12 xl12 Container-nowrap-center">
              <img className="Edu-image" src={ process.env.PUBLIC_URL + '/assets/img/kkgsob-transparent.jpg' } alt="Education" />
            </div>
          </div>
          <div className="col s12 m9 l8 xl4">
            <div className="col xl12 No-margin No-padding Container-wrap-center-cross">
              <div className="col s12 l5 xl12">
                <Place>Kwik Kian Gie</Place>
                <Place>School of Business</Place>
              </div>
              <div className="col s12 l7 xl12">
                <Time>October 2008 - June 2012</Time>
              </div>
              <div className="col s12 l12 xl12">
                <Title>Bachelor of Economics</Title>
              </div>
            </div>
            <div className="col xl12 Activity-box-first">
              <ParagraphTitle>Program : Business Accounting</ParagraphTitle>
              <ParagraphTitle>GPA : 3.50 out of 4.00</ParagraphTitle>
              <Paragraph style={{ marginBottom: '0px' }}>Activities and Societies: </Paragraph>
              <ul className="browser-default" style={{ marginTop: '0px' }}>
                <li>
                  <Paragraph style={{ marginTop: '0px', marginBottom: '0px' }}>Student Senate 2008 - 2010</Paragraph>
                </li>
                <li>
                  <Paragraph style={{ marginTop: '0px', marginBottom: '0px' }}>Catholic Student Unit 2010 - 2012</Paragraph>
                </li>
              </ul>
            </div>
          </div>
          <div className="col m12 xl6">
            <div className="col xl12 Activity-box-second">
              <ParagraphTitle>Program : Business Accounting</ParagraphTitle>
              <ParagraphTitle>GPA : 3.50 out of 4.00</ParagraphTitle>
              <Paragraph style={{ marginBottom: '0px' }}>Activities and Societies: </Paragraph>
              <ul className="browser-default" style={{ marginTop: '0px' }}>
                <li>
                  <Paragraph style={{ marginTop: '0px', marginBottom: '0px' }}>Student Senate 2008 - 2010</Paragraph>
                </li>
                <li>
                  <Paragraph style={{ marginTop: '0px', marginBottom: '0px' }}>Catholic Student Unit 2010 - 2012</Paragraph>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
