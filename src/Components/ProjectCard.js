import React from 'react'

import {AiFillGithub} from 'react-icons/ai'

export default function ProjectCard({project:{name, image, deployed_url, github_url}}) {
  return (
    <div className="projectCard col-md-6 col-lg-4 my-2">
        <figure className="projectCrad_wrapper">
            <a href={deployed_url} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={name} className="projectCard_image"/>
            </a>
            <div className="projectCard_title">
            <a href={github_url} target="_blank" rel="noopener noreferrer">
                {/* <img src={github} alt="github link" className="projectCard_icon "/> */}
                <AiFillGithub size={24} />
            </a>
            {name}
            </div>
        </figure>
    </div>
  )
}
