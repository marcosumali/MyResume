import React, { Component } from 'react';
import styled from 'styled-components';

import media from '../media/queries1';
// import { Toast } from 'react-materialize';

const Place = styled.div`
  color: var(--light-blue);
  font-weight: bold;
  font-size: 22px;
  ${media.large`
    font-size: 20px;
  `}
  ${media.small`
    margin-top: 10px;
    font-size: 16px;
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
  margin-bottom: 16px;
  ${media.large`
    font-size: 20px;
  `}
  ${media.medium`
  `}
  ${media.small`
    margin-top: 0px;
    font-size: 12px;
    text-align: center;
  `}
`

const ParagraphTitle = styled.div`
  color: var(--black);
  font-weight: bold;
  font-size: 18px;
  ${media.large`
  `}
  ${media.small`
    font-size: 14px;
  `}
`

const Paragraph = styled.div`
  color: var(--black);
  font-size: 16px;
  text-align: justify;
  margin-top: 8px;
  margin-bottom: 16px;
  ${media.large`
    font-size: 16px;
  `}
  ${media.small`
    font-size: 14px;
  `}
`

const BtnGradient = styled.div`
  min-width: 200px;
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
    width: 120px;
    line-height: 35px;
  `}
  ${media.small`
  `}
`

// const BtnBlue = styled.div`
//   width: 200px;
//   line-height: 50px;
//   border-radius: 5px;
//   margin: 16px 0px 24px 16px;
//   background: var(--light-blue);
//   text-align: center;
//   ${media.large`
//     display: none;
//   `}
//   ${media.medium`
//     display: none;
//   `}
//   ${media.small`
//     display: none;
//   `}
// `

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

export default class Experience extends Component {
  render() {
    return (
      <div className="row No-margin No-padding">
        <div className="col s12" style={{padding: "5% 5% 3.5% 5%"}}>
          <div className="col s12 m3 l4 xl2">
            <div className="col s12 xl12 Container-nowrap-center Image-box-first">
              <img className="Exp-image" src={ process.env.PUBLIC_URL + '/assets/img/govtechLogo.jpg' } alt="Experience" />
            </div>
          </div>
          <div className="col s12 m12 l12 xl8">
            <div className="col m3 l2 Container-nowrap-center">
              <div className="col s12 xl12 Container-nowrap-center Image-box-second">
                <img className="Exp-image" src={ process.env.PUBLIC_URL + '/assets/img/govtechLogo.jpg' } alt="Experience" />
              </div>
            </div>
            <div className="col m9 l10 xl12 No-margin No-padding Container-wrap-center-cross">
              <div className="col s12 l12 xl12">
                <Place>Govtech Singapore</Place>
              </div>
              <div className="col s12 l12 xl12">
                <Time>December 2020 - Present</Time>
              </div>
              <div className="col s12 l12 xl12">
                <Title>Backend Engineer</Title>
              </div>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Paragraph>"The Government Technology Agency is a statutory board of the Government of Singapore, under the Prime Minister's Office, that is responsible for delivery of Goverment Digital Services on building Smart Nation Infrasructure."</Paragraph>
              <Paragraph>
                <ol>
                  <li>Currently on secondment project from 2359 Media Pte Ltd to work as backend engineer at client side.</li>
                  <li>Assist frontend team on UI development, API integration and bugfixes.</li>
                </ol>
              </Paragraph>
              <Paragraph>Tech Stack:</Paragraph>
              <Paragraph>ReactJS, Redux, Material UI, Google Dialogflow, NodeJS, ExpressJS, MongoDB, Mongoose, Express Validator, Jira, Confluence etc.</Paragraph>
            </div>
          </div>
        </div>

        <div className="col s12" style={{padding: "3.5% 5% 3.5% 5%"}}>
          <div className="col s12 m3 l4 xl2">
            <div className="col s12 xl12 Container-nowrap-center Image-box-first">
              <img className="Exp-image" src={ process.env.PUBLIC_URL + '/assets/img/2359Logo.jpeg' } alt="Experience" />
            </div>
          </div>
          <div className="col s12 m12 l12 xl8">
            <div className="col m3 l2 Container-nowrap-center">
              <div className="col s12 xl12 Container-nowrap-center Image-box-second">
                <img className="Exp-image" src={ process.env.PUBLIC_URL + '/assets/img/2359Logo.jpeg' } alt="Experience" />
              </div>
            </div>
            <div className="col m9 l10 xl12 No-margin No-padding Container-wrap-center-cross">
              <div className="col s12 l12 xl12">
                <Place>2359 Media Pte Ltd</Place>
              </div>
              <div className="col s12 l12 xl12">
                <Time>January 2020 - Present</Time>
              </div>
              <div className="col s12 l12 xl12">
                <Title>Frontend Engineer</Title>
              </div>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Paragraph>"2359 Media is an award-winning mobile app development company that aims to become the pioneer and paragon of the mobile marketing industry by helping brands increase presence and influence through effective and innovative mobility solutions. The Company has offices in Singapore, Indonesia and Vietnam at the moment."</Paragraph>
              <Paragraph>
                <ol>
                  <li>Develop products by converting our sweet design into a functioning web application with efficient and readable codes.</li>
                  <li>Identify and fix bugs on our frontend codes</li>
                  <li>Experienced working as product engineer to develop chat bot and voice bot.</li>
                  <li>Experienced in setting up CI/CD for automatic deployment from Github.</li>
                  <li>Experienced in developing frontend codes using modern web framework with minimum supervision.</li>
                  <li>Experienced working as PIC on the frontend team and provide feedbacks to Project Manager.</li>
                  <li>Experienced in development cycle of two week sprint using Jira.</li>
                  <li>Experienced in running manual QA tests and communicate it to the team.</li>
                </ol>
              </Paragraph>
              <Paragraph>Tech Stack:</Paragraph>
              <Paragraph>ReactJS, VueJS, SvelteJS, Redux with Sagas, Material UI, React Toolbox, React Calendar, React Flow, Google Dialogflow, Amazon S3, Amazon Pipeline, Amazon CodeBuild, Google Interactive Canvas, Websocket, Jira, Confluence etc.</Paragraph>
            </div>
          </div>
        </div>

        <div className="col s12" style={{padding: "3.5% 5% 0px 5%"}}>
          <div className="col s12 xl10 offset-xl2 Personal-box">
            <div className="col s12 l12 xl12">
              <Place>Personal Project</Place>
            </div>
            <div className="col s12 l12 xl12">
              <Time>September 2018 - April 2019</Time>
            </div>
          </div>
          <div className="col s12 m3 l4 xl2">
            <div className="col s12 xl12 Container-nowrap-center Image-box-first">
              <img className="Exp-image" src={ process.env.PUBLIC_URL + '/assets/img/dishkonLogo.png' } alt="Experience" />
            </div>
          </div>
          <div className="col s12 m12 l12 xl4">
            <div className="col s12 m3 l2 Container-nowrap-center">
              <div className="col s12 xl12 Container-nowrap-center Image-box-second">
                <img className="Exp-image" src={ process.env.PUBLIC_URL + '/assets/img/dishkonLogo.png' } alt="Experience" />
              </div>
            </div>
            <div className="col s12 m12 l10 xl12 No-margin No-padding Container-wrap-center-cross">
              <div className="col s12 l12 xl12">
                <Place>Dishkon Indonesia</Place>
              </div>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Paragraph>"Dishkon is a food saving concept that aims to reduce food waste in Jakarta by helping businesses to promote edible unsold foods at discount. At the end of the project, we are in process creating an online community where registered users able to buy promoted foods at discount."</Paragraph>
              <a href="https://foodsaver-app.web.app/" target="_blank" rel="noopener noreferrer">
                <BtnGradient>
                  <BtnText>Visit Website</BtnText>
                </BtnGradient>
              </a>
              <ParagraphTitle>Business</ParagraphTitle>
              <Paragraph>
                <ol>
                  <li>Acquired 750++ users during first month pre-registration on the website and convince 20% of them to register themselves as part of our Food Avengers team who will be first buyers on our initial MVP.</li>
                </ol>
              </Paragraph>
              <ParagraphTitle>Technical</ParagraphTitle>
              <Paragraph>
                <ol>
                  <li>Build a simple landing page for fake door testing by integrating Facebook Pixels and Google Analytics for traction measurement.</li>
                  <li>Implement Google Webmaster SEO Policy to ensure the website are ranked on the first page result.</li>
                </ol>
              </Paragraph>
              <ParagraphTitle>Design</ParagraphTitle>
              <Paragraph>
                <ol>
                  <li>Build the overall front-end design using Adobe XD and the required digital assets for development.</li>
                  <li style={{ marginBottom: "16px" }}>Design and generate required assets for digital advertisement over Facebook, Instagram and Twitter.</li>
                </ol>
              </Paragraph>
            </div>
          </div>
          <div className="col s12 m12 l12 xl6 Second-section">
            <div className="col s12 m12 l12 xl12 Dishkon-box">
              <div className="col s12 No-margin No-padding Speaker-box Container-wrap-center">
                <div className="Speaker"></div>
              </div>
              <div className="col s12 No-margin No-padding Dishkon-web-box">
                <iframe 
                  title="DishkonProject"
                  className="Dishkon-web"
                  src="https://foodsaver-app.web.app/" 
                  frameBorder="0" 
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col s12 No-margin No-padding Home-box Container-wrap-center">
                <div className="Home-circle"></div>
              </div>
            </div>
            {/* <div className="col s12 Second-section-info-box">
              <div className="Second-section-info">Please use laptop or desktop devices to enjoy the full experience of trying out the applications directly on this website.</div>
            </div> */}
          </div>
        </div>

        <div className="col s12" style={{padding: "3.5% 5% 5% 3.5%"}}>
          <div className="col s12 m3 l4 xl2">
            <div className="col s12 xl12 Container-nowrap-center Image-box-first">
              <img className="Exp-image" src={ process.env.PUBLIC_URL + '/assets/img/bookinesiaLogo.png' } alt="Experience" />
            </div>
          </div>
          <div className="col s12 m12 l12 xl8">
            <div className="col s12 m3 l2 Container-nowrap-center">
              <div className="col s12 xl12 Container-nowrap-center Image-box-second">
                <img className="Exp-image" src={ process.env.PUBLIC_URL + '/assets/img/bookinesiaLogo.png' } alt="Experience" />
              </div>
            </div>
            <div className="col s12 m12 l10 xl12 No-margin No-padding Container-wrap-center-cross">
              <div className="col s12 l12 xl12">
                <Place>Bookinesia</Place>
              </div>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Paragraph>"Bookinesia is a waiting list apps to help service businesses manage and monitor their daily operation in real time and easily connect with their customers. At the end of project, we were able to build a functioning prototpye but we weren't able to get traction from businesses."</Paragraph>
              <div className="col s12 No-margin No-padding Container-wrap-center-cross">
                <a href="https://bookinesia-com.web.app/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '16px' }}>
                  <BtnGradient>
                    <BtnText>Visit Customer Website</BtnText>
                  </BtnGradient>
                </a>
                <a href="https://bookinesia-shop.web.app/" target="_blank" rel="noopener noreferrer">
                  <BtnGradient>
                    <BtnText>Visit Store Admin Website</BtnText>
                  </BtnGradient>
                </a>
                {/* <div className="Container-wrap-center-cross">
                  <BtnBlue>
                    <Toast options={{html: 'Email: owner.dummyshop.bekasi@example.com; Password: *please type 1 to 8*; Data: To start please check November / March calender dates'}}>
                      <BtnText>Get Admin Privilege</BtnText>
                    </Toast>
                  </BtnBlue>
                </div> */}
              </div>
              <ParagraphTitle>Technical</ParagraphTitle>
              <Paragraph>
                <ol>
                  <li>Build the server-less MVP for two-sided marketplace from scratch up to v0.3 in 14 weeks including develop the user interface for customer and the admin panel for store management with secured authentications.</li>
                    <ul className="browser-default">
                      <li>v0.0: MVP where customer can book a transaction and admin can monitor the transactions including user authentications.</li>
                      <li>v0.1: Improvement over server security rules, user authentications and admin page of the MVP.</li>
                      <li>v0.2: Refining and refactoring the layout for better mobile user experience for both customer and admin websites and add new features for updating store information.</li>
                      <li>v0.3: Build segregation of duties on admin website where each user have specific privilege based on their job description and add new feature of multiple branch monitor per accounts.</li>
                    </ul>
                  <li>Integrate multiple framework and packages in developing the MVP:</li>
                    <ul className="browser-default">
                      <li>Front-end: React JS, Redux, Materialize UI, Google Library, Firebase Hosting</li>
                      <li>Back-end: Google Cloud Firestore, Firestore Security Rules, Google Cloud Functions, Firebase Storage, Firebase Authentication, Google Maps, Sendgrid</li>
                    </ul>
                </ol>
              </Paragraph>
              <ParagraphTitle>Design</ParagraphTitle>
              <Paragraph>
                <ol>
                  <li>Design the MVP front-end in 2 weeks including required digital assets using Adobe XD.</li>
                  <li>Design and generate required assets for digital advertisement over Facebook, Instagram and Twitter.</li>
                  <li>User interface was designed using mobile-first framework considering respective user will mostly use mobile devices for booking services.</li>
                  <li>Admin interface was designed for devices with minimum width of 7 inches for operational calender utilisation purposes or for mobile devices in landscape mode.</li>
                  <li>Build 1 minute introduction video.</li>
                </ol>
              </Paragraph>
              <ParagraphTitle>Business</ParagraphTitle>
              <Paragraph>
                <ol>
                  <li>Develop the operation logic for transaction process that is inline with security rules.</li>
                  <li style={{ marginBottom: "16px" }}>Calculate the monthly production cost per Cash Generating Unit.</li>
                </ol>
              </Paragraph>
            </div>
          </div>
          <div className="col s12 m12 l12 xl12 Second-section" style={{marginTop: "3.5%"}}>
            <div className="col s12 m12 l4 xl3 Bookinesia-user-box">
              <div className="col s12 No-margin No-padding Speaker-box Container-wrap-center">
                <div className="Speaker"></div>
              </div>
              <div className="col s12 No-margin No-padding Dishkon-web-box">
                <iframe 
                  title="BookinesiaProject"
                  className="Bookinesia-user"
                  src="https://bookinesia-com.web.app/" 
                  frameBorder="0" 
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col s12 No-margin No-padding Home-box Container-wrap-center">
                <div className="Home-circle"></div>
              </div>
            </div>
            <div className="col s12 m12 l8 xl8 offset-xl1 Bookinesia-admin-box">
              <div className="col s12 No-margin No-padding Speaker-box Container-wrap-center">
                <div className="Speaker"></div>
              </div>
              <div className="col s12 No-margin No-padding Dishkon-web-box">
                <iframe 
                  title="BookinesiaProject"
                  className="Bookinesia-admin"
                  src="https://bookinesia-shop.web.app/" 
                  frameBorder="0" 
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col s12 No-margin No-padding Home-box Container-wrap-center">
                <div className="Home-circle"></div>
              </div>
            </div>
            {/* <div className="col s12 Second-section-info-box">
              <div className="Second-section-info">Please use laptop or desktop devices to enjoy the full experience of trying out the applications directly on this website.</div>
            </div> */}
          </div>
        </div>

        <div className="col s12 Exp-box">
          <div className="col s12 m3 l4 xl2">
            <div className="col s12 xl12 Container-nowrap-center Image-box-first">
              <img className="Exp-image" src={ process.env.PUBLIC_URL + '/assets/svg/pwcLogo.svg' } alt="Experience" />
            </div>
          </div>
          <div className="col s12 m12 l12 xl8">
            <div className="col m3 l2 Container-nowrap-center">
              <div className="col s12 xl12 Container-nowrap-center Image-box-second">
                <img className="Exp-image" src={ process.env.PUBLIC_URL + '/assets/svg/pwcLogo.svg' } alt="Experience" />
              </div>
            </div>
            <div className="col m9 l10 xl12 No-margin No-padding Container-wrap-center-cross">
              <div className="col s12 l12 xl12">
                <Place>PwC Indonesia</Place>
              </div>
              <div className="col s12 l12 xl12">
                <Time>July 2012 - October 2017</Time>
              </div>
              <div className="col s12 l12 xl12">
                <Title>Associate - Assistant Manager, Assurance</Title>
              </div>
            </div>
            <div className="col s12 m12 l12 xl12">
              <Paragraph>Awarded as Exceeding Expectation Employee</Paragraph>
              <Paragraph>
                <ol>
                  <li>Led 20 to 25 staffs and successfully conducting statutory audits by demonstrates sufficient technical skills and considerable knowledge of IFRS and Indonesian Financial Accounting Standards.</li>
                  <li>Successfully planned and implemented risk-based audit procedures resulted in average increase of engagement margin up to 30% for several projects since 2014.</li>
                  <li>Experienced in examining significant business combination transactions that requires deep understanding of IFRS 3 and related Indonesian financial accounting standards.</li>
                  <li>Experienced in developing audit procedures for significant bill and hold transactions that requires deep understanding of IAS 18 and related Indonesian financial accounting standards.</li>
                </ol>
              </Paragraph>
              <Paragraph>Key clients:</Paragraph>
              <Paragraph>
                <ol>
                  <li>PT GlaxoSmithKline Indonesia is a subsidiaries of GSK Global (UK) which is awarded by Forbes as one of world’s 25 biggest drug and biotech companies in 2016.</li>
                  <li>PT Toyota Astra Motor is a joint venture business between PT Astra International Tbk. and Toyota Motor Corporation. The Company is the distributor for Toyota Motor Vehicle and hold 34.5% (2016) of motor vehicle market share in Indonesia.</li>
                  <li>PT United Tractors, Tbk (UNTR) is significant subsidiaries of PT Astra International Tbk. and the largest distributor of heavy equipment in Indonesia by holding 40% (2016) of Indonesia's heavy equipment market.</li>
                </ol>
              </Paragraph>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
