import React from "react";
import react from "../assets/icons/react.svg";
import javascript from "../assets/icons/java-script.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import html5 from "../assets/icons/html5.svg";
import css3 from "../assets/icons/css3.svg";
import git from "../assets/icons/git.svg";
import vsc from "../assets/icons/vsc.svg";
import latex from "../assets/icons/latex.svg";
import chrome from "../assets/icons/chrome.svg";

import Bar from "./Bar";
const languages = [
  {
    icon: javascript,
    name: "JavaScript",
    level: "90",
  },
  {
    icon: react,
    name: "React",
    level: "90",
  },
  {
    icon: bootstrap,
    name: "Bootstrap",
    level: "95",
  },
  {
    icon: html5,
    name: "HTML5",
    level: "95",
  },
  {
    icon: css3,
    name: "CSS3",
    level: "95",
  },
];

const tools = [
  {
    icon: git,
    name: "Git ",
    level: "85",
  },
  {
    icon: latex,
    name: "LaTeX",
    level: "95",
  },
  {
    icon: vsc,
    name: "Vscode",
    level: "85",
  },
  {
    icon: chrome,
    name: "Chrome Dev Tools",
    level: "80",
  },
];

export default function Resume() {
  return (
    <div className="container resume">
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
              Devcareer, Lagos- Frontend Developer
            </h5>
            <span>Aug 2020 - Present</span>
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
              Worked remotely with a team of 4 across different states to build a Personal Finance Tracker website. 
              We used HTML, CSS, BOOTSTRAP, Git(version control), Club-House ( Project management). 
              I was tasked with creating the Income, Expense, and the Budget pages.
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



      





    </div>
  );
}
