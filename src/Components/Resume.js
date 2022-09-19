import React from "react";
import { motion } from "framer-motion";
import { tools, languages } from "./data/resume_data";

import Bar from "./Bar";

export default function Resume() {
  const project_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="container resume"
      variants={project_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 reume-card">
          <h4 className="resume-card_heading">Education</h4>
          <div className="resume-card_body">
            <h5 className="resue-card_title"> M.s.c. Mathematics</h5>
            <p className="resume-card_name">Kwara State University, Ilorin </p>
            <p className="resume-card_details">
              M.s.c. Mathematics with Ph.D. grade attained.
            </p>
          </div>

          <div className="resume-card_body">
            <h5 className="resue-card_title"> B.s.c. Mathematics</h5>
            <p className="resume-card_name">Kwara State University, Ilorin </p>
            <p className="resume-card_details"></p>
          </div>
        </div>
        <div className="col-lg-6 reume-card">
          <h4 className="resume-card_heading">Experience</h4>


          <div className="resume-card_body">
            <h5 className="resume-card_title">
              {" "}
              Datamellon Limited , Lagos— Frontend Developer
            </h5>
            <span>Jan 2021 - Aug 2021</span>
            {/* <p className="resume-card_name">Lorem ipsum dolor sit amet.</p> */}
            <ul className="resume-card_details">
              <li>
              Working in a team of 4 to build <href>dillivry.com</href> A logistics marketplace that connects senders to
        feedback-rated logistics providers who compete for your delivery request, and you pick the best.
              </li>
              <li>
              Working across disciplines with team members on the front-end team.
              </li>
              <li>
              Working with UI designers to implement front-end technologies{" "}
              </li>
              <li> Translating UI/UX designs and wireframes into high-quality code</li>
            </ul>
          </div>




          <div className="resume-card_body">
            <h5 className="resume-card_title">
              {" "}
              Cloudware Technologies, Ibadan— Junior Software Tester
            </h5>
            <span>Jan 2021 - Aug 2021</span>
            {/* <p className="resume-card_name">Lorem ipsum dolor sit amet.</p> */}
            <ul className="resume-card_details">
              <li>
                Identify, document, and report bugs
              </li>
              <li>
                Manual testing methods.
              </li>
              <li>
              Creating, and writing test cases.{" "}
              </li>
              <li> Review and analyse system specifications.</li>
            </ul>
          </div>



          <div className="resume-card_body">
            <h5 className="resume-card_title">
              {" "}
              Devcareer, Lagos- Frontend Developer
            </h5>
            <span>Aug 2020 - Dec 2020</span>
            {/* <p className="resume-card_name">Lorem ipsum dolor sit amet.</p> */}
            <ul className="resume-card_details">
              <li>
                Responsible for building and deploying interactive web
                applications using front end technologies like React.
              </li>
              <li>
                Engaged with the team in software requirements, design, and
                reviews.
              </li>
              <li>
                Translating UI/UX designs and wireframes into high-quality code{" "}
              </li>
              <li> Writing code according to specifications and standards</li>
            </ul>
          </div>




          <div className="resume-card_body">
            <h5 className="resume-card_title">
              {" "}
              Start.ng, Remote- Frontend Developer
            </h5>
            <span>May 2020 - July 2020</span>
            <ul className="resume-card_details">
              <li>
                Responsible for building and deploying interactive web
                applications using front end technologies like React.
              </li>
              <li>
                Worked remotely with a team of 4 across different states to
                build a Personal Finance Tracker website. We used HTML, CSS,
                BOOTSTRAP, Git(version control), Club-House ( Project
                management). I was tasked with creating the Income, Expense, and
                the Budget pages.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">Language and framework</h5>
          <div className="resume-language_body mt-3">
            {languages.map((Language, i) => (
              <Bar key={i} value={Language} />
            ))}
          </div>
        </div>

        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">Tools and software</h5>
          <div className="resume-language_body mt-3">
            {tools.map((tool, i) => (
              <Bar key={i} value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
