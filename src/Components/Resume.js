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
        {/* <div className="flex flex-col" > */}
        <div className="col-lg-6 reume-card">
          <h4 className="resume-card_heading">Education</h4>

          <div className="resume-card_body">
            <h5 className="resue-card_title"> B.s.c. Mathematics</h5>
            <p className="resume-card_name">Kwara State University, Ilorin </p>
            <p className="resume-card_details"></p>
          </div>
        </div>
        {/* </div> */}



        <div className="col-lg-6 reume-card">
          <h4 className="resume-card_heading">Experience</h4>


          <div className="resume-card_body">
            <h5 className="resume-card_title">
              {" "}
              Datamellon Limited , Lagos— Frontend Developer
            </h5>
            <span>Sept. 2021 - Present</span>
            {/* <p className="resume-card_name">Lorem ipsum dolor sit amet.</p> */}
            <ul className="resume-card_details">
              <li>
                Currently collaborating with other engineers to develop <a style={{ color: 'blue' }} href='https://www.klaudworks.io/'>klaudworks.io</a>, a
                customized cloud payment service.
              </li>
              <li>
                Implemented the <a style={{ color: 'blue' }} href='https://dillivry.com/'>Dillivry</a> website from scratch, resulting in a 10% increase in
                user engagement.
              </li>
              <li>
                Collaborated seamlessly with cross-functional teams, contributing to
                revamping the  <a style={{ color: 'blue' }} href='https://datamellon.com/'>Datamellon Website</a> and ensuring a unified and polished
                outcome.
              </li>
              <li> Worked on  <a style={{ color: 'blue' }} href='https://admin.dillivry.com/'>Dillivry Admin</a> backend and implemented a lot of features that
                bring ease to the platform usage</li>

              <li>Collaborated with senior colleagues to train interns and corps members on
                React and JavaScript.</li>
              <li>Built a high-performance web application based on RESTful APIs.</li>

              <li>Built scalable, seamless, and responsive user interfaces.</li>

              <li>Used project management tools like Jira and Basecamp to track progress and
                meet deadlines.</li>
            </ul>
          </div>


          <div className="resume-card_body">
            <h5 className="resume-card_title">
              {" "}
              {/* Datamellon Limited , Lagos— Frontend Developer */}
              CodeFixBug, Abuja-   Frontend Developer
              {/* Frontend Developer - CodeFixBug, Abuja, May 2022 - December 2022 */}
            </h5>
            <span>May 2022 - December 2022</span>
            {/* <p className="resume-card_name">Lorem ipsum dolor sit amet.</p> */}
            <ul className="resume-card_details">
              <li>
                {/* Currently collaborating with other engineers to develop <a style={{ color: 'blue' }} href='https://createtribute.com/'>Createtribute</a>, a
                customized cloud payment service. */}
                Revamped the <a style={{ color: 'blue' }} href='https://createtribute.com/'>Createtribute</a> and admin websites using React, JavaScript,
                HTML, and CSS.
              </li>
              <li>
                Consumed all necessary APIs to ensure that the website was fully functional
              </li>
              <li>
                Deployed the website to production using a continuous integration and
                delivery (CI/CD) pipeline.
              </li>
              <li> Collaborated with the backend developer to ensure seamless integration
                between the front and back end.</li>

              <li>Implemented designs from Figma to create a visually appealing and
                user-friendly website.</li>
              {/* <li>Built a high-performance web application based on RESTful APIs.</li>

              <li>Built scalable, seamless, and responsive user interfaces.</li>

              <li>Used project management tools like Jira and Basecamp to track progress and
                meet deadlines.</li> */}
            </ul>
          </div>





          {/* <div className="resume-card_body">
            <h5 className="resume-card_title">
              {" "}
              Cloudware Technologies, Ibadan— Junior Software Tester
            </h5>
            <span>Jan 2021 - Aug 2021</span>

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
          </div> */}



          <div className="resume-card_body">
            <h5 className="resume-card_title">
              {" "}
              Devcareer, Lagos- Frontend Developer
            </h5>
            <span>Aug 2020 - Dec 2020</span>
            {/* <p className="resume-card_name">Lorem ipsum dolor sit amet.</p> */}
            <ul className="resume-card_details">
              <li>
                Worked with team 5 to build the DevCareer V2 website using HTML, CSS,
                Bootstrap, React, and GatsbyJS.
              </li>
              <li>
                Worked with a team of 5 to design, develop, and launch the new website.
              </li>
              <li>
                Successfully translated UI/UX designs and wireframes into high-quality code.
              </li>
              <li> Ensured that all code met specifications and standards.</li>
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
