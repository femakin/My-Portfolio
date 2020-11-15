import React, { useState } from 'react'
import data_project from './data/project_data'
import ProjectCard from './ProjectCard'
import {motion} from 'framer-motion'

export default function Project() {
const [projects, setprojects] = useState(data_project)
const [active] = useState("All")

// const handleFilterCategory = (name) =>{
//   const new_array =  data_project.filter(project => project.category.includes(name))
// setprojects(new_array)
// setActive(name)
// }
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
    <motion.div className="container project"
    variants={project_variants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        <div className="projects_navbar">
            <div className={active === "All" && 'project_navbar-active'} onClick={()=> setprojects(data_project)}>All</div>
             {/* <div  className={active === "react.js" && 'project_navbar-active'} onClick={() =>handleFilterCategory('react.js')}>React</div>
            <div  className={active === "mongoDB" && 'project_navbar-active'} onClick={() =>handleFilterCategory('mongoDB')}>MongoDB</div>
            <div  className={active === "node.js" && 'project_navbar-active'} onClick={() =>handleFilterCategory('node.js')}>Node</div>
            <div  className={active === "vanilla" && 'project_navbar-active'} onClick={() =>handleFilterCategory("vanilla")}>Vanilla </div>  */}
        </div>
        
        <div className="row">
            {
projects.map((project, i)=>(
    <ProjectCard key={project.name} project={project}/>
))
            }
        </div>
    </motion.div>
  )
}
