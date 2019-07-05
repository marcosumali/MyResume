import React, { Component } from 'react';

import styled from 'styled-components';
import media from '../media/queries1';
import UpButton from '../svg/Up';
import DownButton from '../svg/Down';

const Place = styled.div`
  color: var(--light-blue);
  font-weight: bold;
  font-size: 22px;
  ${media.large`
    font-size: 20px;
  `}
  ${media.small`
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
  `}
`

const Time = styled.div`
  color: var(--gray);
  font-weight: bold;
  font-size: 22px;
  ${media.large`
    font-size: 20px;
    color: var(--gray);
    text-align: left;
  `}
  ${media.medium`
    font-size: 20px;
    color: var(--gray);
    text-align: left;
  `}
  ${media.small`
    margin-top: 0px;
    font-size: 12px;
    text-align: center;
  `}
`

const Title = styled.div`
  color: var(--gray);
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 0px;
  ${media.large`
    font-size: 20px;
  `}
  ${media.medium`
  `}
  ${media.small`
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 12px;
    text-align: center;
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

const BtnGradient = styled.div`
  width: 140px;
  line-height: 50px;
  border-radius: 5px;
  margin: 16px 0px 24px 0px;
  background: #08AFEA;
  background: -webkit-linear-gradient(bottom right, #08AFEA, #2AF598);
  background: -moz-linear-gradient(bottom right, #08AFEA, #2AF598);
  background: linear-gradient(to top left, #08AFEA, #2AF598);

  &:hover {
    background: var(--light-blue);
  }

  ${media.medium`
    width: 80px;
    line-height: 35px;
  `}
  ${media.small`
  `}
`
const BtnText = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: var(--white);

  ${media.medium`
    font-size: 12px;
  `}
  ${media.small`
    font-size: 12px;
  `}
`

export default class Awards extends Component {
  constructor() {
    super()
    this.state = {
      showStatus1: false,
      showStatus2: false,
      showStatus3: false,
      showStatus4: false,
      showStatus5: false,
    }
  }

  updateState = (code, status) => {
    let icon = document.getElementById(code)
    if (status === true) {
      this.setState({
        [code]: false
      })
      icon.classList.remove("rotateIn")
      icon.classList.add("rotateOut")
    } else if (status === false) {
      this.setState({
        [code]: true
      })
      icon.classList.remove("rotateOut")
      icon.classList.add("rotateIn")
    }
  }

  render() {
    return (
      <div className="row No-margin No-padding">
        <div 
          className="col s10 offset-s1 m10 offset-m1 l10 offset-l1 xl6 offset-xl3 Aw-box" 
          onClick={ () => this.updateState('showStatus1', this.state.showStatus1) }
        >
          <div className="col s12 m3 l2 xl2 Container-wrap-center">
            <img className="Aw-image" src={ process.env.PUBLIC_URL + '/assets/img/SWJ-transparent.png' } alt="Awards1" />
          </div>
          <div className="col s12 m8 l9 xl9">
            <div className="col s12 m12 l12 xl12">
              <Place>Startup Weekend Jakarta</Place>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Time>April 2019</Time>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Title>Runner-up Winner</Title>
            </div>
          </div>
          <div className="col s12 m1 l1 xl1 Container-wrap-center Down-box">
            {
              this.state.showStatus1 ?
              <div id="showStatus1">
                <UpButton 
                  className="Up-size"
                  color="var(--light-blue)"
                />
              </div>
              :
              <div id="showStatus1">
                <DownButton 
                  className="Down-size"
                  color="var(--light-blue)"
                />
              </div>
            }
          </div>
          {
            this.state.showStatus1 ?
            <div className="col s12 fadeIn">
              <Paragraph>Gerobak Sayur is a social enterprise concept that aims in reducing food losses in Indonesia by redistributing fresh produce from local groceries to traditional mobile vegetable vendors (tukang sayur).</Paragraph>
              <a href="https://e27.co/winners-of-startup-weekend-jakarta-2019-20190408/" target="_blank" rel="noopener noreferrer">
                <BtnGradient>
                  <BtnText>Publication</BtnText>
                </BtnGradient>
              </a>
              <iframe 
                src="https://docs.google.com/presentation/d/e/2PACX-1vRLI75ORAZl1q88XimD4E9tE63RcDI_m0fWO0QyHWuSwrLLgyobl2_G-IYDY7-FUntb3t14oQscFACi/embed?start=false&loop=true&delayms=10000"
                title="GerobakSayur"
                className="Powerpoint"
                frameBorder="0"
                allowFullScreen={true} 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true"
              ></iframe>
            </div>
            :
            <div></div>
          }
        </div>
        
        <div 
          className="col s10 offset-s1 m10 offset-m1 l10 offset-l1 xl6 offset-xl3 Aw-box" 
          onClick={ () => this.updateState('showStatus2', this.state.showStatus2) }
        >
          <div className="col s12 m3 l2 xl2 Aw-image-box Container-wrap-center">
            <img className="Aw-image" src={ process.env.PUBLIC_URL + '/assets/img/iapi.png' } alt="Awards2" />
          </div>
          <div className="col s12 m8 l9 xl9">
            <div className="col s12 m12 l12 xl12">
              <Place>Ikatan Akuntan Publik Indonesia</Place>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Time>September 2017</Time>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Title>Certified Public Accountant</Title>
            </div>
          </div>
          <div className="col s12 m1 l1 xl1 Container-wrap-center Down-box">
            {
              this.state.showStatus2 ?
              <div id="showStatus2">
                <UpButton 
                  className="Up-size"
                  color="var(--light-blue)"
                />
              </div>
              :
              <div id="showStatus2">
                <DownButton 
                  className="Down-size"
                  color="var(--light-blue)"
                />
              </div>
            }
          </div>
          {
            this.state.showStatus2 ?
            <div className="col s12 fadeIn">
              <Paragraph>Credential ID C-002330</Paragraph>
              <img className="Aw-CPA" src={ process.env.PUBLIC_URL + '/assets/img/cpaCertificateMAS.jpg' } alt="Awards2" />
            </div>
            :
            <div></div>
          }
        </div>

        <div 
          className="col s10 offset-s1 m10 offset-m1 l10 offset-l1 xl6 offset-xl3 Aw-box" 
          onClick={ () => this.updateState('showStatus3', this.state.showStatus3) }
        >
          <div className="col s12 m3 l2 xl2 Aw-image-box Container-wrap-center">
            <img className="Aw-image" src={ process.env.PUBLIC_URL + '/assets/svg/pwcLogo.svg' } alt="Awards3" />
          </div>
          <div className="col s12 m8 l9 xl9">
            <div className="col s12 m12 l12 xl12">
              <Place>PwC Indonesia</Place>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Time>2017</Time>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Title>Exceeding Expectation Employee</Title>
            </div>
          </div>
          <div className="col s12 m1 l1 xl1 Container-wrap-center Down-box">
            {
              this.state.showStatus3 ?
              <div id="showStatus3">
                <UpButton 
                  className="Up-size"
                  color="var(--light-blue)"
                />
              </div>
              :
              <div id="showStatus3">
                <DownButton 
                  className="Down-size"
                  color="var(--light-blue)"
                />
              </div>
            }
          </div>
          {
            this.state.showStatus3 ?
            <div className="col s12 fadeIn">
              <Paragraph>Performance review from direct manager:</Paragraph>
              <Paragraph>"In current year, the quality of balance sheet reconciliation was in poor shape due to migration system.
                <br/>+ Despite the condition, he has a good project management in arranging the areas since in current engagement when we are lacking resources of first year associates while client insisted to have a timely report sign-off.
                <br/>+ Furthermore, managing the relationship with the management is quite challenging, Marco dealt with many business function:
                <br/>--- Senior Finance Director
                <br/>--- Finance Controller
                <br/>--- Head of Accounting
                <br/>--- Tax and Local Statutory Manager
                <br/>to present and highlight the audit issues and finding that would need further support from management. During discussion, he can well explain and discuss issues/constraints (including understanding the root causes) that he noted -- he always keep two way communication and propose alternative solutions in order to overcome the issues.
              </Paragraph>
              <Paragraph>Currently, we have issued one of the accounts at the end of April 2017. This result was supported by Marco's high contribution and commitment.</Paragraph>
              <Paragraph>-- Pro-active, Timely update, Consistent, Clear objective, Very well coaching, communication, and negotiation skills, Understanding clients' business, Positive working environment (obtained strong commitment from team members) -- reflected in Marco's involvement.</Paragraph>
              <Paragraph>Overall, he is exceeding my expectation and I always happy to work with him since three years ago. Looking forward to work with you in the future."</Paragraph>
            </div>
            :
            <div></div>
          }
        </div>

        <div 
          className="col s10 offset-s1 m10 offset-m1 l10 offset-l1 xl6 offset-xl3 Aw-box" 
          onClick={ () => this.updateState('showStatus4', this.state.showStatus4) }
        >
          <div className="col s12 m3 l2 xl2 Aw-image-box Container-wrap-center">
            <img className="Aw-image" src={ process.env.PUBLIC_URL + '/assets/svg/pwcLogo.svg' } alt="Awards4" />
          </div>
          <div className="col s12 m8 l9 xl9">
            <div className="col s12 m12 l12 xl12">
              <Place>PwC Indonesia</Place>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Time>2016</Time>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Title>Exceeding Expectation Employee</Title>
            </div>
          </div>
          <div className="col s12 m1 l1 xl1 Container-wrap-center Down-box">
            {
              this.state.showStatus4 ?
              <div id="showStatus4">
                <UpButton 
                  className="Up-size"
                  color="var(--light-blue)"
                />
              </div>
              :
              <div id="showStatus4">
                <DownButton 
                  className="Down-size"
                  color="var(--light-blue)"
                />
              </div>
            }
          </div>
          {
            this.state.showStatus4 ?
            <div className="col s12 fadeIn">
              <Paragraph>Performance review from direct manager:</Paragraph>
              <Paragraph>
                <ol>
                  <li>Client<br />
                    <ul>
                      <li>High responsive and proactive discussion with key management.</li>
                      <li>Able to deal with key management (Financial Controller, Division Head) very well.</li>
                    </ul>
                  </li>
                  <li>Firm<br />
                    <ul>
                      <li>Proactive and timely updated Team Manager and achieve the audit timeline.</li>
                      <li>High commitment to resolve the outstanding issues.</li>
                      <li>Fast leaner and thorough in understanding the root causes.</li>
                    </ul>
                  </li>
                  <li>People<br />
                    <ul>
                      <li>Built strong and conducive working environment with the team.</li>
                    </ul>
                  </li>
                </ol>
              </Paragraph>
              <Paragraph>Overall, I appreciate efforts been significantly put by Marco on this engagement. He is a key personnel which make us able to complete this final audit. Thanks for your superb contribution on the team. You are always in my first selection if I can choose someone to work with. Keep up in the good work.</Paragraph>
            </div>
            :
            <div></div>
          }
        </div>

        <div 
          className="col s10 offset-s1 m10 offset-m1 l10 offset-l1 xl6 offset-xl3 Aw-box" 
          onClick={ () => this.updateState('showStatus5', this.state.showStatus5) }
        >
          <div className="col s12 m3 l2 xl2 Aw-image-box Container-wrap-center">
            <img className="Aw-image" src={ process.env.PUBLIC_URL + '/assets/svg/pwcLogo.svg' } alt="Awards5" />
          </div>
          <div className="col s12 m8 l9 xl9">
            <div className="col s12 m12 l12 xl12">
              <Place>PwC Indonesia</Place>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Time>2015</Time>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Title>Exceeding Expectation Employee</Title>
            </div>
          </div>
          <div className="col s12 m1 l1 xl1 Container-wrap-center Down-box">
            {
              this.state.showStatus5 ?
              <div id="showStatus5">
                <UpButton 
                  className="Up-size"
                  color="var(--light-blue)"
                />
              </div>
              :
              <div id="showStatus5">
                <DownButton 
                  className="Down-size"
                  color="var(--light-blue)"
                />
              </div>
            }
          </div>
          {
            this.state.showStatus5 ?
            <div className="col s12 fadeIn">
              <Paragraph>"I am pleased to work with Marco in the engagement. The most noted from him are:</Paragraph>
              <Paragraph>+ In charge for Deferred Revenue and Bill and Hold (significant risk), which considered most complex area in the engagement. He contributed in designing the audit procedures and executed it very well. Able to deliver good result and thinking out of the box in complex area.</Paragraph>
              <Paragraph>+ Very good, structured and clear documentation in delivering working paper. Easy to understand for the reviewer.</Paragraph>
              <Paragraph>+ Can work independently but knows at which end he should seek for guidance.</Paragraph>
              <Paragraph>+ Good delivery of result in verbal/presentation and during discussion with engagement manager, director or leader."</Paragraph>
            </div>
            :
            <div></div>
          }
        </div>
      </div>
    )
  }
}
