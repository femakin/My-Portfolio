import React from 'react'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import linkedin from '../assets/icons/linkedin.svg'
import resume from '../assets/resume.pdf'


export default function Sidebar() {
    const handleEmailMe = () => {
        window.open("mailto:akinfemi46@gmail.com")
    }
    function gitHub() {
        window.open('https://github.com/femakin?tab=repositories');
      }
  return (
    <div className="sidebar">
      <img src="https://res.cloudinary.com/femakin/image/upload/v1605095076/IMG-20201110-WA0147_mwlzbq.jpg" alt="avatar" className="sidebar_avatar"/>
      <div className="sidebar_name">Femi <span>Akinyemi</span></div>
   <div className="sidebar_item sidebar_title">Front-end Developer</div>
   <a href={resume} download="resume.pdf">
       <div className="sidebar_item sidebar_resume">
           <img src={tie} alt="resume" className="sidebar_icon"/>Download Resume
       </div>
   </a>
   <div className="sidebar_social-icons my-2">
       <a href="/"><img src={facebook} alt="facebook" className="sidebar_icon mr-3"/></a>
       <a href="/"><img src={instagram} alt="instagram" className="sidebar_icon"/></a>
   </div>
   <div className="sidebar_contact">
       <div className="sidebar_item sidebar_github  ">
           <a href="/" onClick={gitHub}><img src={github} alt="github" className="sidebar_icon mr-2"/>github</a>
          
           
       </div>
       <div className="sidebar_item"><a href="/"><img src={linkedin} alt="github" className="sidebar_icon mr-2" />LinkedIn</a></div>
       <div className="sidebar_location"> <img src={pin} alt="location" className="sidebar_icon mr-2"/>Ibadan, Nigeria</div>
       <div className="sidebar_item">akinfemi46@gmail.com</div>
       <div className="sidebar_item">07037495325</div>
   </div>
   <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email me</div>
    </div>
  )
}
