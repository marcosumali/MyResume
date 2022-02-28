import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import media from '../media/queries';

const Card = styled.div`
  width: 100%;
  padding: 48px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px 20px 0 rgba(52, 138, 227, 0.18);
  background-color: #ffffff;
  ${media.tablet`
    padding: 20px;
  `}
  ${media.phone`
    margin-bottom: 24px;
  `}
`

const CardTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: var(--light-blue);
  line-height: 1.26;
  margin-top: 12px;
  ${media.tablet`
    font-size: 24px;
    margin-top: 0px;
    `}
    ${media.phone`
    margin-top: 12px;
  `}
`

const CardText = styled.div`
  font-size: 14px;
  color: var(--gray);
  line-height: 1.25;
  margin-top: 20px;
  ${media.tablet`
    font-size: 10px;
    margin-top: 10px;
  `}
  ${media.phone`
  `}
`

const BtnGradient = styled.div`
  width: 140px;
  line-height: 50px;
  border-radius: 5px;
  margin-top: 20px;
  background: #08AFEA;
  background: -webkit-linear-gradient(bottom right, #08AFEA, #2AF598);
  background: -moz-linear-gradient(bottom right, #08AFEA, #2AF598);
  background: linear-gradient(to top left, #08AFEA, #2AF598);

  &:hover {
    background: var(--light-blue);
  }

  ${media.tablet`
    width: 80px;
    line-height: 35px;
  `}
  ${media.phone`
  `}
`
const BtnText = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: var(--white);

  ${media.tablet`
    font-size: 12px;
  `}
  ${media.phone`
  `}
`


export default class Section extends Component {
  render() {
    return (
      <div id="Section" className="row No-margin No-padding Container-wrap-center-cross">
        <div className="col m12 s12 No-margin No-padding Section-box Container-wrap">
          <div className="col m4 s12">
            <Card className="Container-wrap-center">
              <div className="col s12 No-margin No-padding Container-nowrap-center">
                <img className="Card-image" src={ process.env.PUBLIC_URL + 'assets/svg/experience.svg' } alt="Experience"/>
              </div>
              <div className="col s12 No-margin No-padding">
                <CardTitle>Experience</CardTitle>
              </div>
              <div className="col s12 No-margin No-padding">
                <CardText>If you are interested to see on my learning curves and overall professional working experiences, you can check this list out.</CardText>
              </div>
              <div className="col s12 No-margin No-padding">
                <Link to="/experience">
                  <BtnGradient>
                    <BtnText>Learn More</BtnText>
                  </BtnGradient>
                </Link>
              </div>
            </Card>
          </div>
          <div className="col m4 s12">
            <Card className="Container-wrap-center">
              <div className="col s12 No-margin No-padding Container-nowrap-center">
                <img className="Card-image" src={ process.env.PUBLIC_URL + 'assets/svg/education.svg' } alt="Education"/>
              </div>
              <div className="col s12 No-margin No-padding">
                <CardTitle>Education</CardTitle>
              </div>
              <div className="col s12 No-margin No-padding">
                <CardText>Check this section out for my educational background where I learn various disciplines from accounting and programming.</CardText>
              </div>
              <div className="col s12 No-margin No-padding">
                <Link to="/education">
                  <BtnGradient>
                    <BtnText>Learn More</BtnText>
                  </BtnGradient>
                </Link>
              </div>
            </Card>
          </div>
          <div className="col m4 s12">
            <Card className="Container-wrap-center">
              <div className="col s12 No-margin No-padding Container-nowrap-center">
                <img className="Card-image" src={ process.env.PUBLIC_URL + 'assets/svg/awards.svg' } alt="Awards"/>
              </div>
              <div className="col s12 No-margin No-padding">
                <CardTitle>Awards</CardTitle>
              </div>
              <div className="col s12 No-margin No-padding">
                <CardText>This section consist of information regarding my performance review, achievements, awards and certifications from my past experiences.</CardText>
              </div>
              <div className="col s12 No-margin No-padding">
                <Link to="/awards">
                  <BtnGradient>
                    <BtnText>Learn More</BtnText>
                  </BtnGradient>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}
