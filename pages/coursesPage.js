import Nav from '../components/landing_page/nav';
import styles from '../styles/coursesPage.module.css';
import React, { Component } from 'react';

class CoursePageDisplay extends Component {
    render() {
      return (
        <div className="container-fluid pt-5 pb-0 mb-3 mt-3">
          <Nav Signin="true"/>
          {/* add small empty space */}
          <h1 className="mt-4 text-center">Courses</h1>
          <div className="row justify-content-center">
            {courses.map((course, index) => (
              <div key={index} className="col-sm-12 col-md-12 col-lg-6 p-2">
                <div className="card white h-100">
                  <div className="card-body">
                    <div className="row justify-content-center align-items-center">
                      {/* {course.image && <img src={course.image} alt="" className={styles.featureImages} />} */}
                      <div className="col-12">
                        <div className="text-center">
                          <h6 className="card-title justify-content-center">{course.title}</h6>
                        </div>
                        <ul className={styles.listContent + " pl-lg-7"}>
                          {course.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
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
  
  export default CoursePageDisplay;

  const courses = [
    {
      title: 'Cloud Computing',
      image: '/images/aws.png',
      details: [
        'Cloud computing service models and economics',
        'Virtualization and Infrastructure-as-a-Service',
        'Application concurrency and data consistency models',
        'Identity and access control in cloud computing systems',
        'Cloud storage systems: Characteristics and tradeoffs',
        'Inter-service communication: Messaging and notifications',
        'Cloud security, privacy, and policy compliance',
        'Serverless computing, microservices, and containerization',
        'Automated deployment and operations techniques',
],
    },
    {
      title: 'Web Development',
      image: '/images/webdev.jpg',
      details: [
        'Fundamentals of HTML5, CSS3, and JavaScript/ES6 for front-end programming',
        'Visual Design and Responsive Web Design',
        'Client/Server Communication',
        'Building Web Applications',
        'Single-page application development',
        'Server-side page rendering',
        'Database-driven application development',
        'Content Management Systems',
        'REST API development',
        'Network Attacks & Web App Security',
        'Debugging tools and techniques',
        ],
    },

    {
        title: 'High Performance Computing',
        image: '/images/aws.jpeg',
        details: [
            'Overview of CPU and GPU Architectures: Instruction sets, Functional units, Memory hierarchies',
            'Performance Metrics : Latency and bandwidth, Roofline modeling',
            'Single-core optimization: Compiler-assisted vectorization (data-level parallelism), Design patterns for cache-based optimization',
            'Multi-threaded CPU programming: Worksharing, synchronization, and atomic operations, Memory access patterns, including non-uniform memory access, The OpenMP API',
            'GPU programming: Thread-mapping for optimal vectorization and memory access, Task-scheduling for latency reduction, The CUDA and OpenMP offload APIs',
            'Distributed parallelism: Synchronous and asynchronous communication patterns, Data decomposition, Hybrid models for distributed multi-threaded and GPU programming, The MPI API',
        ],
    },

    {
        title: 'Introduction to Computer Systems',
        image: '/images/aws.jpeg',
        details: [
            'Boolean logic, combinatorical chip design, Karnaugh maps, hardware description language',
            'Sequential chip design, binary arithmetic',
            'Machine language, computer architecture',
            'Assemblers',
            'Virtual machine paradigm, stack arithmetic',
            'Virtual machine language program control',
            'Overview of high-level object-oriented programming languages',
            'Compilers, syntax analysis, code generation, Operating systems',
        ],
    },

    {
        title: 'C Programming',
        image: '/images/aws.jpeg',
        details: [
            'Buid tools, preprocessor, compiling and linking.',
            'Debugging',
            'Unit testing',
            'Pointers and Arrays',
            'Pointers and Array, Part II; Recursion',
            'Structures, Unions, Bit-Fields, Typedef',
            'Data structures: linked lists, stacks, queues, sets, hash tables, trees, heaps',
            'Algorithms: coding classical sorting and searching algorithms, algorithmic analysis',
            'Multicore Programming: threads & synhronization',
        ],
    },

    {
        title: 'Algorithms',
        image: '/images/aws.jpeg',
        details: [
            'Sorting and searching algorithms',
            'Divide and conquer algorithms',
            'Randomized algorithms',
            'Dynamic programming',
            'Hash tables, heaps, and binary search trees',
            'Graph search',
            'Graph shortest paths',
            'Minimum spanning trees',
            'Network flow',
            'NP-completeness',
        ],
    },

    {
        title: 'Advanced Computer Architecture',
        image: '/images/aws.jpeg',
        details: [
            'Efficient programming for cache-based serial processors',
            'MIMD and cache coherency',
            'Efficient programming for multicore processors',
            'SIMD and vector instructions',
            'GPU memory and cores',
            'TPUs, matrix engines, systolic arrays',
            'Learned about systems geared toward performance intensive computing: clusters, Multicore CPUs, GPUs, RISC-V, ARM, TPUs',
        ],
    },

    {
        title: 'Machine Learning',
        image: '/images/aws.jpeg',
        details: [
            'Linear and logistic regression and regularization',
            'Classification using decision trees, nearest neighbors, naive Bayes, boosting, random trees, and artificial/convolutional neural networks',
            'Clustering using k-means and expectation-maximization',
            'Dimensionality reduction through PCA and SVD',
        ],
    },

    {
        title: 'Topics in Software Engineering',
        image: '/images/docker.png',
        details: [
            'Software Design using the Unified Modeling Language notation',
            'Microservices Architecture',
            'Continuous Integration and Continuous Deployment',
            'RESTful API design and testing',
            'Software Development Lifecycle integrating Agile methodologies',
            'Containerization',
        ],
    },

    {
        title: 'Parallel Programming',
        image: '/images/aws.jpeg',
        details: [
            'Processes and threads',
            'Shared memory',
            'Hardware mechanisms for parallel computing',
            'Synchronization and communication for parallel systems',
            'Performance optimizations',
            'Parallel data structures',
            'Memory consistency and hierarchies for parallel computing',
            'Patterns of parallel programming',
            'Parallel programming on GPUs',
            'Additional topics dependent on student request and time',
        ],
    },

    {
      title: "Distributed Systems",
      image: '/images/aws.jpeg',
      details: [
        'Distributed architectures',
        'Processes and threads',
        'Networking and communication mechanisms',
        'Naming and mapping',
        'Synchronization',
        'Distributed time and ordering',
        'Consistency',
        'Fault tolerance',
        'Distributed consensus',
        'Distributed data',
        'Data intensive computing',
      ],

    }


];
 
  
