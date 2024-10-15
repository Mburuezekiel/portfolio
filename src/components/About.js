import React from 'react';
import ME from "../assets/mypic.jpeg"; // Ensure the path to your image is correct.

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <hr />

      <div className="about-content">
        <div className="about-image">
          <img src={ME} alt="Ezekiel Njuguna" />
        </div>

        <div className="about-text">
          <h3 className="username">Ezekiel Njuguna</h3>
  <h4 className="usernam" style={{ fontSize: '12px' }}>Bsc Business Information Technology, BBIT</h4>

          <p className="occupation">Full-Stack Developer</p>
          {/* <p className="email">Email: <a href="mailto:ezekiel@example.com">ezekiel@example.com</a></p>
           */}
          <div className="links">
            <a href="https://github.com/Mburuezekiel" target="_blank" rel="noopener noreferrer" className="github"> <i className="bi bi-github"></i> GitHub</a>
             <a href="https://www.fiverr.com/s/6YKPG3r" target="_blank" rel="noopener noreferrer" className="fiverr"> <i class="bi bi-diagram-2-fill"></i> Fiverr </a>
            <a href="https://www.linkedin.com/in/ezekiel-mburu-5aaa00262/" target="_blank" rel="noopener noreferrer" className="linkedin">   <i className="bi bi-linkedin"></i> LinkedIn</a>
          



            </div>
          
          <p>
            As a full-stack software developer with a diverse skill set, I have a strong foundation in front-end technologies such as HTML, CSS, and Vue. I am also proficient in backend technologies like Python, Node.js, Flask, and Django, and have experience working with databases like MongoDB. I am highly motivated and adaptable, with a passion for creating intuitive and user-friendly web applications. I am always looking for new challenges and opportunities to grow and improve as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
