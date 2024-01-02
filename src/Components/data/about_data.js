import React from 'react';
import api from '../../assets/icons/api.svg'
import computer from '../../assets/icons/computer.svg';
import algo from '../../assets/icons/algo.svg'


const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: ["I can build a beautiful and scalable SPA using",
            <strong key={1}> TypeScript, JavaScript, NextJS, TailwindCSS, AWS, HTML, S(CSS), and React.js</strong>]
    },
    {

        icon: algo,
        title: "Design Implementation",
        about: ["I may not be the person behind Figma or AdobeXD. But I can take any design to the next level with my", <strong key={2}> stylesheet superpowers.</strong>]
    },
    {
        icon: algo,
        title: "Competitive Coder.",
        about: "A daily problem solver in Edabit"
    },
    {
        icon: api,
        title: "Mathematician",
        about: "Teaching and exploring mathematics concept."
    }
]

export default skills