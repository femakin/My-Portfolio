import React from 'react'
import Skillcard from '../Skillcard';
import {motion} from 'framer-motion'
import skills from '../data/about_data'
import './about.css'


export default function About() {

    const project_variants={
        hidden:{
            
            opacity: 0
                },
                visible:{
                    x:0,
                    opacity: 1,
                    transition:{
                        delay:0.2,
                        duration:0.6,
                       
                    }
                },exit:{
                    opacity:0,
                    transition:{
                        ease: "easeInOut"
                    }
                }
    }




  return (
    <div>
      <motion.div className="about"  variants={project_variants}
    initial="hidden"
    animate="visible"
    exit="exit">
        <h6 className="about_intro">
      {/* I describe myself as someone who's persistent, highly Motivated and a fast learner seeking to launch a career building web applications and
services. Familiar with the development and deployment process for many web-based
technologies. Yes. i AM. */}

I am a frontend software engineer with the passion to build amazing products that proffer solutions to socio-economic problems faced by the world population, while keeping to high standards and best practices.

As a professional frontend engineer, I advocate amazing user experiences, as well as aesthetically pleasing and responsive user interfaces. 

My preferred stack is in core Javascript and ReactJs, I write clean and maintainable codes with a proper architecture using these technologies, and also stay up to date with recent modifications to them.

         
        </h6>
        <div className="container about_container">
          <h6 className="about_heading">What I offer</h6>
          <div className="row">
            {
skills.map((skill, i)=> (
    <Skillcard key={i} skill={skill}/>
))
            }
          </div>
        </div>
      </motion.div>
    </div>
  );
}
