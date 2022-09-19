import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Navbar() {
  
 const [active, setActive] = useState("")
  useEffect(() => {
let currentURL = window.location.href
console.log(currentURL);
if(currentURL.endsWith('/'))
setActive("About");
else if(currentURL.endsWith('/projects'))
setActive('Portfolio')
else if(currentURL.endsWith('/resume'))
setActive('Resume')
// else if(currentURL.endsWith('/resume'))
// setActive('Resume')
  }, [active])
  
  const navbar_variant={
    hidden:{
      y: '-20vh',
      
    },
    visible: {
      y: 0,
      
      transition:{
        delay:0.2,
        duration:0.7,
        type: 'spring'
    }
    }
  }
  return (
    <motion.div className="navbar"
    variants={navbar_variant}
    initial="hidden"
animate='visible'    
    >


      <div className="navbar_active">
        {active}
      </div>
      <div className="navbar_items">
      {active !== "Home" && <Link to="/"><div className="navbar_item" onClick={()=>setActive('Home')}>Home</div></Link> }
        {active !== "About" && <Link to="/"><div className="navbar_item" onClick={()=>setActive('About')}>About</div></Link> }
        {active !== "Resume" ? <Link to="/resume"><div className="navbar_item" onClick={()=>setActive('Resume')}>Resume</div></Link> : null}
       {active !== "Projects" &&  <Link to="/projects"><div className="navbar_item" onClick={()=>setActive('Projects')}>Portfolio</div></Link>}
      </div>
      
    </motion.div>
  )
}
