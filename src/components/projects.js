import React from 'react';
import './assets/projects.css';
import project1 from './assets/images/project1.png';
import project2 from './assets/images/project2.png';
import project3 from './assets/images/project3.png';

function Projects(){
    return(
        <section id = "projects" style = {{ background : "#222222" }}>
                <h2 className = "text-center">My <strong>Projects</strong></h2><br/>
                <div className = "row pl-auto pr-auto">
                    
                    <div className = "col-md-4">
                        <div className = "card" style = {{ background : "#222222" }}>
                            <img src = { project1 } className="card-img-top" alt = "NodeJs project"/>
                            <div className = "card-body">
                                <h4>Blog API using NodeJS,MongoDB and Express</h4>
                                <a className = "btn btn-outline-light" href = "https://github.com/rupeshmohanty/Blog-api-using-nodejs">See Code</a>
                            </div>
                        </div>
                    </div>
                    <div className = "col-md-4">
                    <div className = "card" style = {{ background : "#222222" }}>
                            <img src = { project2 } className="card-img-top"  alt = "Spectrum Club"/>
                            <div className = "card-body">
                                <h4>Technical Club Website</h4>
                                <a className = "btn btn-outline-light" href = "https://github.com/rupeshmohanty/Spectrum">See Code</a>
                            </div>
                        </div>
                    </div>
                    <div className = "col-md-4">
                    <div className = "card" style = {{ background : "#222222" }}>
                            <img src = { project3 } className="card-img-top"  alt = "Student Attendance System"/>
                            <div className = "card-body">
                                <h4>Student Attendance System</h4>
                                <a className = "btn btn-outline-light" href = "https://github.com/rupeshmohanty/student-attendance-system">See Code</a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
        </section>
    );
    }

export default Projects;