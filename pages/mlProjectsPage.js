import Nav from '../components/landing_page/nav';
import styles from '../styles/coursesPage.module.css';
import React, { Component } from 'react';

class mlProjectsPageDisplay extends Component {
    render() {
      return (
        <div className="container-fluid pt-5 pb-0 mb-3 mt-3">
          <Nav />
          {/* add small empty space */}
          <h1 className="mt-3 text-center">Machine Learning Projects</h1>
          <div className="row ">
            {courses.map((course, index) => (
              <div key={index} className="col-sm-12 col-md-12 col-lg-6 p-2">
                <div className="card white h-100">
                  <div className="card-body">
                    <div className="row justify-content-center align-items-center">
                      {/* <img src={course.image} alt="" className={styles.featureImages} /> */}
                      <div className="col-12">
                        <div className="text-center">
                          <h6 className="card-title justify-content-center">{course.title}</h6>
                        </div>
                        <ul className={styles.listContent + " pl-lg-7"}>
                          {course.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                        {course.slides && <a className="btn btn-primary" href={course.slides} target="_blank"> Click Here To View {course.resource_name} </a>}
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
  
  export default mlProjectsPageDisplay;

  const courses = [
    {
      title: 'Genomics Annotation Service - AWS Cloud Computing',
      resource_name: 'Report',
      // slides: '/assets/pdfs/hpc4.pdf',
      details: [
        'Developed a software-as-a-service genomics annotation application which allows free and premium users to upload their input files, check the status of their annotation jobs and retrieve job results/log files',
        'Integrated the application with a Stripe payment system; Included a notification system to inform the users of their job completion',
        'Implemented an archival process to transfer free users’ result files from S3 to Glacier after 5 min to save the storage cost incurred'
      ]
  },
    {
      title: 'Named Entity Recognition Tagging - Geoffrey Hinton Fellow (NLP, Univ AI)',
      image: '/images/aws.jpeg',
      resource_name: 'Slides',
      slides: '/assets/pdfs/NER presentation.pdf',
      details: [
        'To tag the scientific terms in an astrophysics dataset called WIESP2022, I used a deep BiLSTM model to perform Named Entity Recognition for authors, papers, publications, conferences, etc. I used the Tensorflow framework to implement the model, with the Adam optimizer and the CrossEntropyLoss function. I achieved an accuracy of 97% on the test set when compared to 95% on a simpleRNN network.',
        'As part of this fellowship, I learned what Natural Language Processing and Language Modeling are, as well as how to use the LSTMs using Tensorflow and transformers using HuggingFace library to fine-tune a pre-trained BERT model for NER tagging.',
        'I also learned about the Transformer architecture, which is a neural network architecture that uses attention mechanisms to process sequences of data. The Transformer architecture is used in a variety of natural language processing (NLP) tasks, including machine translation, text summarization, and question answering.',],
    },
    {
      title: "Deception Detection Using Machine Learning - Master's Dissertation, IIT Bombay",
      resource_name: 'Thesis',
      slides: '/assets/pdfs/Deception Detection Using ML.pdf',
      details: [
        'My objective was to build a model that identifies the truthfulness of a candidate in a job interview using their video, audio and transcribed text data.',
        'There is a dearth of non-native English speaker datasets and I wanted to make a deception corpus, consisting of equal lies and truths for different types of interview questions, direct and suggestive questions.',
        'I conducted 30 interviews and created a corpus with TF-IDF, LIWC, POS, prosodic, acoustic, lexical & personality (Big Five) features extracted, best features selected using Ada-boost, extratree classifier & correlation methods',
        'I used a variety of machine learning algorithms, including SVM, Random Forest, and XGBoost, to train the model.',
        'Finally, I built a stacked LSTM model using Keras and achieved an accuracy of 64.7% which is greater than the average human lie detection - 57%.',
        ],
    },

    {
      title: 'Indian Customer Behavior towards Electric Vehicles - Research Project, IIT Bombay',
      slides: '/assets/pdfs/paper.pdf',
      resource_name: 'Paper',
      details: [
        'Our objective was to identify the factors contributing to EV buyer readiness across cities in India and to improve its adaptation.',
        'So, we curated a 35-feature survey dataset, and modeled it using logit, DL, LDA & Naïve Bayes classifiers and achieved 72 % test set accuracy.',
        'We published our findings in the Journal of Eastern Asia Society for Transportation Studies.',
      ]
    },

    {
        title: 'Machine Learning Projects at the University of Chicago',
        resource_name: 'Course Website',
        slides: 'https://mpcs-courses.cs.uchicago.edu/2023-24/spring/courses/mpcs-53111-1',
        details: [
            'As part of the Machine Learning course, I coded algorithms for decision tree classifier, SVMs, logistic regression with gradient descent, boosting, CNNs from scratch',
            'It helped me understand the math behind the algorithms and how to tune the hyperparameters to improve the accuracy of the model.',
            'It also helped me understand the importance of feature engineering and how to select the best features for the model.',
        ],
    },





];
 
  
