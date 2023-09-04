import Nav from '../components/landing_page/nav';
import styles from '../styles/coursesPage.module.css';



// const Course_info = (name, point1, point2, point3, image) => {
//     return (
//         <div className="col-12">
//             <div className="card white h-100">
//                 <div className="card-body">
//                     <div className="text-center">
//                         <h6 className="card-title justify-content-center">{name}</h6>
//                     </div>
//                     <ul>
//                         <li>{point1}</li>
//                         <li>{point2}</li>
//                         <li>{point3}</li>
//                     </ul>
//                     <img src={image} alt="" className={styles.featureImages} />

//                 </div>
//             </div>
//         </div>
//     )
// }

const course_page_display = () => {
    return (
        <div className="container-fluid pt-5 pb-0 mb-3 mt-3">
            <Nav />
            <h1 className="text-center">Courses</h1>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card white h-100">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-3 ">
                                    <img src="/images/aws.png" alt="" className={styles.featureImages} />
                                </div>
                                <div className="col-9">
                                    <div className="text-center">
                                        <h6 className="card-title justify-content-center">Cloud Computing</h6>
                                    </div>
                                    <ul className={styles.listContent}>
                                        <li>Cloud computing service models and economics</li>
                                        <li>Virtualization and Infrastructure-as-a-Service</li>
                                        <li>Application concurrency and data consistency models</li>
                                        <li>Identity and access control in cloud computing systems</li>
                                        <li>Cloud storage systems: Characteristics and tradeoffs</li>
                                        <li>Inter-service communication: Messaging and notifications</li>
                                        <li>Cloud security, privacy, and policy compliance</li>
                                        <li>Serverless computing, microservices, and containerization</li>
                                        <li>Automated deployment and operations techniques</li>
                                    </ul>
                                    <img src="/images/cloud.png" alt="" className={styles.featureImages} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card white h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/aws.png" alt="" className={styles.featureImages} />
                                </div>
                                <div className="col-9">
                                    <div className="text-center">
                                        <h6 className="card-title justify-content-center">Web Development</h6>
                                    </div>
                                    <ul className={styles.listContent}>
                                        <li>Fundamentals of HTML5, CSS3, and JavaScript/ES6 for front-end programming </li>
                                        <li>Visual Design and Responsive Web Design </li>
                                        <li>Client/Server Communication </li>
                                        <li>Building Web Applications </li>
                                        <li>Single-page application development </li>
                                        <li>Server-side page rendering </li>
                                        <li>Database-driven application development </li>
                                        <li>Content Management Systems </li>
                                        <li> REST API development  </li>
                                        <li>Network Attacks & Web App Security </li>
                                        <li>Debugging tools and techniques </li>
                                    </ul>
                                    <img src="/images/cloud.png" alt="" className={styles.featureImages} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card white h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/aws.png" alt="" className={styles.featureImages} />
                                </div>
                                <div className="col-9">
                                    <div className="text-center">
                                        <h6 className="card-title justify-content-center">High Performance Computing</h6>
                                    </div>
                                    <ul className={styles.listContent}>
                                        <li>Overview of CPU and GPU Architectures </li>
                                        {/* subset */}
                                        <ul>
                                            <li>Instruction sets </li>
                                            <li>Functional units </li>
                                            <li>Memory hierarchies </li>
                                        </ul>
                                        <li>Performance Metrics </li>
                                        {/* subset */}
                                        <ul>
                                            <li>Latency and bandwidth </li>
                                            <li>Roofline modeling </li>

                                        </ul>
                                        <li>Single-core optimization </li>
                                        {/* subset */}
                                        <ul>
                                            <li>Compiler-assisted vectorization (data-level parallelism) </li>
                                            <li>Design patterns for cache-based optimization </li>
                                        </ul>
                                        <li>Multi-threaded CPU programming </li>
                                        {/* subset */}
                                        <ul>
                                            <li>Worksharing, synchronization, and atomic operations </li>
                                            <li>Memory access patterns, including non-uniform memory access </li>
                                            <li>The OpenMP API </li>
                                        </ul>
                                        <li>GPU programming </li>
                                        {/* subset */}
                                        <ul>
                                            <li>Thread-mapping for optimal vectorization and memory access </li>
                                            <li>Task-scheduling for latency reduction </li>
                                            <li>The CUDA and OpenMP offload APIs </li>
                                        </ul>
                                        <li>Distributed parallelism </li>
                                        {/* subset */}
                                        <ul>
                                            <li>Synchronous and asynchronous communication patterns </li>
                                            <li>Data decomposition </li>
                                            <li>Hybrid models for distributed multi-threaded and GPU programming </li>
                                            <li>The MPI API </li>
                                        </ul>
                                    </ul>
                                    <img src="/images/cloud.png" alt="" className={styles.featureImages} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card white h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/aws.png" alt="" className={styles.featureImages} />
                                </div>
                                <div className="col-9">
                                    <div className="text-center">
                                        <h6 className="card-title justify-content-center">Introduction to Computer Systems</h6>
                                    </div>
                                    <ul className={styles.listContent}>
                                        <li>Boolean logic, combinatorical chip design, Karnaugh maps, hardware description language </li>
                                        <li>Sequential chip design, binary arithmetic </li>
                                        <li>Machine language, computer architecture </li>
                                        <li>Assemblers </li>
                                        <li>Virtual machine paradigm, stack arithmetic </li>
                                        <li>Virtual machine language program control </li>
                                        <li>Overview of high-level object-oriented programming languages </li>
                                        <li>Compilers, syntax analysis, code generation, Operating systems </li>
                                    </ul>
                                    <img src="/images/cloud.png" alt="" className={styles.featureImages} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card white h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/aws.png" alt="" className={styles.featureImages} />
                                </div>
                                <div className="col-9">
                                    <div className="text-center">
                                        <h6 className="card-title justify-content-center">C Programming</h6>
                                    </div>
                                    <ul className={styles.listContent}>
                                        <li>Buid tools, preprocessor, compiling and linking. </li>
                                        <li>Debugging </li>
                                        <li>Unit testing </li>
                                        <li>Pointers and Arrays </li>
                                        <li>Pointers and Array, Part II; Recursion </li>
                                        <li>Structures, Unions, Bit-Fields, Typedef </li>
                                        <li>Data structures: linked lists, stacks, queues, sets, hash tables, trees, heaps </li>
                                        <li>Algorithms: coding classical sorting and searching algorithms, algorithmic analysis </li>
                                        <li>Multicore Programming: threads & synhronization </li>
                                    </ul>
                                    <img src="/images/cloud.png" alt="" className={styles.featureImages} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card white h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1">
                                    <img src="/images/aws.png" alt="" className={styles.featureImages} />
                                </div>
                                <div className="col-11">
                                    <div className="text-center">
                                        <h6 className="card-title justify-content-center">Algorithms</h6>
                                    </div>
                                    <ul className={styles.listContent}>
                                        <li>Sorting and searching algorithms </li>
                                        <li>Divide and conquer algorithms </li>
                                        <li>Randomized algorithms </li>
                                        <li>Dynamic programming </li>
                                        <li>Hash tables, heaps, and binary search trees </li>
                                        <li>Graph search </li>
                                        <li>Graph shortest paths </li>
                                        <li>Minimum spanning trees </li>
                                        <li>Network flow </li>
                                        <li>NP-completeness </li>
                                    </ul>
                                    <img src="/images/cloud.png" alt="" className={styles.featureImages} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card white h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/aws.png" alt="" className={styles.featureImages} />
                                </div>
                                <div className="col-9">
                                    <div className="text-center">
                                        <h6 className="card-title justify-content-center">Advanced Computer Architecture</h6>
                                    </div>
                                    <ul className={styles.listContent}>
                                        <li>Efficient programming for cache-based serial processors </li>
                                        <li>MIMD and cache coherency </li>
                                        <li>Efficient programming for multicore processors </li>
                                        <li>SIMD and vector instructions </li>
                                        <li>GPU memory and cores </li>
                                        <li>TPUs, matrix engines, systolic arrays </li>
                                        <li>Learned about systems geared toward performance intensive computing: clusters, Multicore CPUs, GPUs, RISC-V, ARM, TPUs </li>
                                    </ul>
                                    <img src="/images/cloud.png" alt="" className={styles.featureImages} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card white h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/aws.png" alt="" className={styles.featureImages} />
                                </div>
                                <div className="col-9">
                                    <div className="text-center">
                                        <h6 className="card-title justify-content-center">Machine Learning</h6>
                                    </div>
                                    <ul className={styles.listContent}>
                                        <li>Linear and logistic regression and regularization </li>
                                        <li>Classification using decision trees, nearest neighbors, naive Bayes, boosting, random trees, and artificial/convolutional neural networks </li>
                                        <li>Clustering using k-means and expectation-maximization </li>
                                        <li>Dimensionality reduction through PCA and SVD </li>
                                    </ul>
                                    <img src="/images/cloud.png" alt="" className={styles.featureImages} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card white h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/aws.png" alt="" className={styles.featureImages} />
                                </div>
                                <div className="col-9">
                                    <div className="text-center">
                                        <h6 className="card-title justify-content-center">Big Data Application Architecture</h6>
                                    </div>
                                    <ul className={styles.listContent}>
                                        <li>Overview of Big Data </li>
                                        <li>Lambda architecture </li>
                                        <li>Data model/storage </li>
                                        <li>Batch layer </li>
                                        <li>Serving layer </li>
                                        <li>Speed layer </li>
                                        <li>Technologies including Hadoop/Spark/Hive/HBase and other NoSQL databases/Thrift/Zookeeper etc. </li>
                                        <li>Scraping and cleaning data </li>
                                    </ul>
                                    <img src="/images/cloud.png" alt="" className={styles.featureImages} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card white h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/aws.png" alt="" className={styles.featureImages} />
                                </div>
                                <div className="col-9">
                                    <div className="text-center">
                                        <h6 className="card-title justify-content-center">Parallel Programming</h6>
                                    </div>
                                    <ul className={styles.listContent}>
                                        <li>Processes and threads </li>
                                        <li>Shared memory </li>
                                        <li>Hardware mechanisms for parallel computing </li>
                                        <li>Synchronization and communication for parallel systems </li>
                                        <li>Performance optimizations </li>
                                        <li>Parallel data structures </li>
                                        <li>Memory consistency and hierarchies for parallel computing </li>
                                        <li>Patterns of parallel programming </li>
                                        <li>Parallel programming on GPUs </li>
                                        <li>Additional topics dependent on student request and time </li>
                                    </ul>
                                    <img src="/images/cloud.png" alt="" className={styles.featureImages} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card white h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/aws.png" alt="" className={styles.featureImages} />
                                </div>
                                <div className="col-9">
                                    <div className="text-center">
                                        <h6 className="card-title justify-content-center">Cloud Computing</h6>
                                    </div>
                                    <ul className={styles.listContent}>
                                        <li>Cloud computing service models and economics</li>
                                        <li>Virtualization and Infrastructure-as-a-Service</li>
                                        <li>Application concurrency and data consistency models</li>
                                        <li>Identity and access control in cloud computing systems</li>
                                        <li>Cloud storage systems: Characteristics and tradeoffs</li>
                                        <li>Inter-service communication: Messaging and notifications</li>
                                        <li>Cloud security, privacy, and policy compliance</li>
                                        <li>Serverless computing, microservices, and containerization</li>
                                        <li>Automated deployment and operations techniques</li>
                                    </ul>
                                    <img src="/images/cloud.png" alt="" className={styles.featureImages} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default course_page_display;