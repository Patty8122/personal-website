import Nav from '../components/landing_page/nav';
import styles from '../styles/coursesPage.module.css';
import React, { Component } from 'react';

class hpcProjectsPageDisplay extends Component {

    render() {
      const showDP = true;
      return (
        <div className="container-fluid pt-5 pb-0 mb-3 mt-3">
          <Nav showDP={showDP} />
          {/* add small empty space */}
          <h1 className="mt-3 text-center">High Performance Computing Projects</h1>
          <div className="row ">
            {courses.map((course, index) => (
              <div key={index} className="col-sm-12 col-md-12 col-lg-6 p-2">
                <div className="card white h-100">
                  <div className="card-body">
                    <div className="row justify-content-center align-items-center">
                      {course.image && <img src={course.image} alt="" className={styles.featureImages} />}
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
  
  export default hpcProjectsPageDisplay;

  const courses = [

    {
      title: "Ray Tracing using CUDA",
      resource_name: 'Report',
      slides: '/assets/pdfs/hpc2.pdf',
      image: '/images/hpc2.png',
      details: [
        'Rendered the image of a 3D object seen by an observer through the window using the ray tracing algorithm for user-provided ray count',
        ],
    },

    {
      title: 'GPU NBody Simulation',
      slides: '/assets/pdfs/hpc3.pdf',
      resource_name: 'Report',
      image: '/images/hpc3.gif',
      details: [
        'Simulated a gravitational n-body problem with a galaxy spiral formation for 100,000+ particles using OpenMP, CUDA',
      ]
    },

    {
      title: 'Cache Emulator',
      resource_name: 'Report',
      // slides: '/assets/pdfs/cacheemulator.pdf',
      details: [
        'Wrote an object-oriented Python script to emulate a physical memory cache system, allowing configurable RAM size and n-associative cache using a random/LRU/FIFO placement strategy. I also emulated the CPU code for daxpy, matrix-matrix multiplication with blocking algorithms using this cache system'
      ]
    },
    {
      title: 'Jack Assembler, Virtual Machine Translator and Compiler - Nand2Tetris',
      resource_name: 'Image',
      // image: '/images/nand2tetris.png',
      details: [
        'Programmed an assembler using Python, that translates Jack assembly language into machine code',
        'Designed, implemented, and tested a virtual machine translator for stack arithmetic and memory access commands',
        'Programmed an object-oriented language compiler comprising of a tokenizer and a code generator that runs programs on a self-designed, virtual hardware'
      ]
    },

    {
        title: 'Deep Learning Using C and OpenMP',
        resource_name: 'Report',
        slides: '/assets/pdfs/hpc4.pdf',
        details: [
            'Wrote a shared memory parallelizable code for a neural network with customizable neurons per layer for the MNIST dataset',
        ]
    },
    {
      title: 'Explicit time-stepping for Advection',
      resource_name: 'Report',
      slides: '/assets/pdfs/hpc1.pdf',
      details: [
        'Performed static grid-based decomposition with ghost cell filling to improve the advection algorithm’s grind using OpenMP & MPI',],
    }



];
 
  
