import Nav from '../components/landing_page/nav';
import styles from '../styles/webProjectsPage.module.css';
import React, { Component } from 'react';
import Link from 'next/link';


class ExperiencePageDisplay extends Component {
  render() {
    return (
      <div className="container-fluid pt-5 pb-0 mb-3 mt-3">
        <Nav />
        {/* add small empty space */}
        <h1 className="mt-3 text-center">Web Development Projects</h1>
        <div className="row justify-content-center">
          {experiences.map((experience, index) => (
            <div key={index} className="col-sm-12 col-md-12 col-lg-6 p-2">
              <div className="card white h-100">
                <div className="card-body">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                      <div className="text-center">
                        <h6 className="card-title justify-content-center">{experience.title}</h6>
                      </div>
                      <ul className={styles.listContent + " pl-lg-7"}>
                        {experience.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                      {experience.link && experience.link !== "" && <Link className="btn btn-primary" href={{ pathname: experience.link, query: this.props.query }}> Click Here To Visit Checklist Website </Link>}

                      <img src={experience.image} alt="" className={styles.featureImages} />
                      {experience.image2 && <img src={experience.image2} alt="" className={styles.featureImages} /> }
                    </div>
                  </div>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ExperiencePageDisplay;



const experiences = [
  {
    title: 'AI Checklist Application',
    image: '/images/AIchecklists.png',
    link: '/checklistPage',
    details: [
      'I worked on a project to create a checklist application that uses AI to help users create checklists.',
      'I used NextJS, and MongoDB to build the application and Google Auth API to authenticate users.',
      'I used OpenAI\'s GPT-3.5 API to generate checklists based on user input.',
      'This checklist application can be used to create checklists for a variety of tasks, including grocery shopping, packing for a trip, and more.',
      'Sub tasks can be added to each checklist item.',
      'Your checklists are saved to your account and can be accessed from any device.',
    ],
  },
  {
    title: 'Custom version of Slack messaging app',
    image: '/images/slackclone.png',
    details: [
      'Please find the github repo for this project here: https://github.com/Patty8122/slack-clone',
      'I used React.js to build a custom version of Slack.',
      'For the backend, I used MySQL to store user data and messages and Flask to run the server.',
    ],
  },
  {
    title: 'Watch Party App',
    image: '/images/watchparty_landingpage.png',
    image2: '/images/watchparty_chat.png',
    details: [
      'Single page application that allows users to run a live chat in different rooms.',
      'I used vanilla JavaScript, HTML, and CSS to build the front end.',
      'I used Flask to run the server and MySQL to store user data and messages.',
    ],
  },
  {
    title: 'Content Management System using PHP',
    image: '/images/webjournal.png',
    details: [
      'Made a simple content management system to make posts and add comments using PHP.',
    ],
  },
];