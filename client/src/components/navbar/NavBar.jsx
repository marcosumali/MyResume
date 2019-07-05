import React, { Component } from 'react';
import { Navbar, NavItem, Modal } from 'react-materialize';

import './NavBar.css';
import FacebookIcon from '../svg/Facebook';
import InstagramIcon from '../svg/Instagram';
import TwitterIcon from '../svg/Twitter';
import WhatsappIcon from '../svg/Whatsapp';
import EmailIcon from '../svg/Email';
import GithubIcon from '../svg/Github';
import LinkedinIcon from '../svg/Linkedin';
import styled from 'styled-components';
import media from '../media/queries1';

const Paragraph = styled.div`
  color: var(--gray);
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

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar brand={<a href="/">MBB.</a>} alignLinks="right">
          <NavItem href="/experience">
            Experience
          </NavItem>
          <NavItem href="/education">
            Education
          </NavItem>
          <NavItem href="/awards">
            Awards
          </NavItem>
          <Modal
            // header={<div className="Contact-header">Chat Me !</div>}
            fixedFooter 
            trigger={<NavItem href="/contact">Contact</NavItem>}>
            <div className="row No-margin No-padding">
              <div className="col s12 Container-wrap-center Contact-img-box">
                <img className="Contact-img" src={ process.env.PUBLIC_URL + "/assets/img/photoMAS.jpg" } alt="contactImage"/>
              </div>
              <div className="col s12 Container-wrap-center Contact-name-box">
                <div className="Contact-name">Marco Sumali</div>
              </div>
              <div className="col s12 Container-wrap-center Social-media-box">
                <a href="https://wa.me/628111777802" target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="Soc-med-icon Wa-color" color="Icon-color"/>
                </a>
                <a href="mailto:support@madebybastian.co" rel="noopener noreferrer">
                  <EmailIcon className="Soc-med-icon Email-color" color="Icon-color"/>
                </a>
                <a href="https://www.linkedin.com/in/marcosumali/" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="Soc-med-icon Linkedin-color" color="Icon-color"/>
                </a>
                <a href="https://github.com/marcosumali" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="Soc-med-icon Git-color" color="Icon-color"/>
                </a>
                <a href="https://www.facebook.com/sebastian.sumali" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon className="Soc-med-icon" color="Icon-color Face-color"/>
                </a>
                <a href="https://www.instagram.com/marcosumali/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="Soc-med-icon Insta-color" color="Icon-color"/>
                </a>
                <a href="https://twitter.com/MarcoSumali" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon className="Soc-med-icon Twit-color" color="Icon-color"/>
                </a>
              </div>
              <div className="col s12 Container-wrap-center Intro-box">
                <Paragraph>Marco is an Indonesian Certified Public Accountant and experienced Public Accountant in handling various group and local statutory audit for national or multinational clients specialized in manufacturing businesses.</Paragraph>
                <Paragraph>Marco is an alumni from Hacktiv8's Coding Bootcamp where he passionately learned and started his journey writing great codes as a Full Stack Developer. He is experienced in leading team during his final project in creating a social media monitoring tool for brand analysis in Indonesia where the team incorporating data mining, data analysis and data visualization process.</Paragraph>
                <Paragraph>Marco is an excellent package of finance and accounting knowledge, analytical thinking, communicative, ability in teamwork and leadership skills. He is passionate about data analytics, digital marketing and startup technology companies.</Paragraph>
              </div>

            </div>
          </Modal>
        </Navbar>
      </div>
    )
  }
}
