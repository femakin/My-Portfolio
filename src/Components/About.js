import React from 'react'
import api from '../assets/icons/api.svg'
import Skillcard from './Skillcard';
import computer from '../assets/icons/computer.svg';
import algo from '../assets/icons/algo.svg'

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a builtiful and scalable SPA using HTML, CSS, and React.js"
    },
    {
        
        icon: api,
        title: "API Development",
        about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, sit!"
    },
    {
        icon: algo,
        title: "Competitive Coder.",
        about: "a daily problem solver in Edabit"
    },
    {
        icon: api,
        title: "Mathematician",
        about: "Teaching and exploring mathematics concept."
    }
]

export default function About() {
  return (
    <div>
      <div className="about">
        <h6 className="about_intro">
      I describe myself as someone who's persistent, highly Motivated and a fast learner seeking to launch a career building web applications and
services. Familiar with the development and deployment process for many web-based
technologies.

         
        </h6>
        <div className="container about_container">
          <h6 className="about_heading">What I offer</h6>
          <div className="row">
            {
skills.map((skill =>(
<Skillcard skill={skill}/>
)))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
