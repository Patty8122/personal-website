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
        <h1 className="text-center">Web Development Projects</h1>
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
                    </div>
                  </div>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                    {experience.link && experience.link !== "" && <Link className="btn btn-primary" href={{ pathname: experience.link, query: this.props.query }}> Click Here! </Link>}
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
    image: '/images/checklist.jpeg',
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
    title: 'University of Chicago Professional Education',
    image: '/images/aws.jpeg',
    details: [
      'Data Analytics Intern',
      'Feb 2023 - Present',
      'My role was to enhance our organization\'s data-driven decision-making processes. For this, I automated customer segmentation for applicants who declined offers by implementing a KModes model, ensuring our outreach efforts were more targeted and effective. Additionally, I developed a user-friendly GUI that could be customized to cater to the unique needs of each program. On the enrollment front, I ideated and programmed a seamless data import pipeline using the Destiny API in Python, streamlining the student enrollment process. To gauge the effectiveness of our campaigns, I automated the generation of performance reports on LinkedIn, Google, and Facebook using their respective APIs. Furthermore, I took charge of creating, organizing, and optimizing dashboards on Tableau Server, enabling our team to monitor key metrics effortlessly, and I handled custom student data analytics requests efficiently. My work also involved using Decision Tree Classifier and Logistic Classifier models to identify the factors contributing to accepted, denied, or declined applications, helping us refine our admissions strategies.',
    ],
  },
  {
    title: 'KLA',
    image: '/images/aws.jpeg',
    details: [
      'Application Engineering Intern',
      'May 2019 - Jul 2019',
      'As an Application Engineering Intern at KLA, my project introduced an attribute selection technique (Earth Mover’s Distance) using correlation analysis, to the ML pipeline, enhancing production error detection.',
    ],
  },
  {
    title: 'National Center for Aerospace Innovation and Research, India',
    image: '/images/aws.jpeg',
    details: [
      'Application Engineering Intern',
      'May 2018 - Jul 2018',
      'I designed an IoT emergency stop system. This system wirelessly controlled lathe and milling machines based on real-time data from current and vibration sensors, ensuring safety during power fluctuations. I also honed skills in database management, server-side scripting, network programming, LAMP stack, and microprocessor programming.',
    ],
  },
];