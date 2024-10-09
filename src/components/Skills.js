import React from 'react';
import { Link } from 'react-router-dom';
import Html from  '../assets/Html.jpeg'
import JavaScript from  '../assets/Html.jpeg'
import Reactcert from  '../assets/Html.jpeg'
import OS from  '../assets/os.jpeg'
import UI from  '../assets/Ui ux.jpeg'
function Skills() {
  const skills = [
    { name: "Javascript",  link: {Html}},
    { name: "React", link: {Html}},
    { name: "Os",  link: {OS}},
    { name: "css",  link: {Html}},
    { name: "Html",  link: {Html}},
    { name: "UI & UX",  link: {UI}},
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <hr />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <p>{skill.name}</p>
            <Link to={`/certificate/${index}`} className='role'>
              View Certificate
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
