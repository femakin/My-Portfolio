import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  
 const [active, setActive] = useState("")
  useEffect(() => {
let currentURL = window.location.href
console.log(currentURL);
if(currentURL.endsWith('/'))
setActive("About");
else if(currentURL.endsWith('/projects'))
setActive('Projects')
else if(currentURL.endsWith('/resume'))
setActive('Resume')
  }, [active])
  
  return (
    <div className="navbar">
      <div className="navbar_active">
        {active}
      </div>
      <div className="navbar_items">

        {active !== "About" && <Link to="/"><div className="navbar_item" onClick={()=>setActive('About')}>About</div></Link> }
        {active !== "Resume" ? <Link to="/resume"><div className="navbar_item" onClick={()=>setActive('Resume')}>Resume</div></Link> : null}
       {active !== "Projects" &&  <Link to="/projects"><div className="navbar_item" onClick={()=>setActive('Projects')}>Projects</div></Link>}
      </div>
      
    </div>
  )
}
