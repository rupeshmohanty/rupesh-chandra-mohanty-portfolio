import React from 'react';
import './assets/resume.css';

function Resume() {
    return(
        <section id = "resume" style = {{ background : "#222222" }}>
            <h2 className = "text-center">My <strong>Resume</strong></h2><br/>

            <div className = "row">

                {/* education section */}
                <div className = "col-md-6">
                    <h2>Education</h2>
                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-body">
                            <p><i class="fa fa-calendar" aria-hidden="true"></i> March 2016</p>
                            <h4>Completed my 10th from Buxi Jagabandhu English Medium School Bhubaneswar</h4>
                            <p className = "lead">
                                I completed my 10th grade and secured CGPA - 10 in AISSE examinations!
                            </p>
                        </div>
                    </div><br/>
                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-body">
                            <p><i class="fa fa-calendar" aria-hidden="true"></i> March 2018</p>
                            <h4>Completed my 12th from Buxi Jagabandhu English Medium School Bhubaneswar</h4>
                            <p className = "lead">
                                I completed my 12th grade and secured 91.2% in AISSCE examinations!
                            </p>
                        </div>
                    </div><br/>
                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-body">
                            <p><i class="fa fa-calendar" aria-hidden="true"></i> August 2018 - present</p>
                            <h4>Pursuing my B.Tech degree from College of Engineering and Technology Bhubaneswar</h4>
                            <p className = "lead">
                                I am presently pursuing my B.Tech degree from College of Engineering and Technology Bhubaneswar, expected to graduate in 2022.
                            </p>
                        </div>
                    </div><br/>
                </div>

                {/* experience */}
                <div className = "col-md-6">
                    <h2>Experience</h2>
                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-body">
                            <p><i class="fa fa-calendar" aria-hidden="true"></i> April 2020 - May 2020</p>
                            <h4>Front-end and Back-end Developer at Ask in City</h4>
                            <p className = "lead">
                                Worked on front-end and back-end side of some ecommerce websites with the developers team.
                            </p>
                        </div>
                    </div><br/>
                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-body mb-1">
                            <p><i class="fa fa-calendar" aria-hidden="true"></i> July 2020 - Sep 2020</p>
                            <h4>Back-end Developer at The Legal Chronicle</h4>
                            <p className = "lead">
                                Worked on the official site of The Legal Chronicle as a Back-end Developer alongwith the developers Team.
                            </p>
                        </div>
                    </div><br/>
                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-body" style = {{ marginBottom : "3%" }}>
                            <p><i class="fa fa-calendar" aria-hidden="true"></i> Aug 2020 - Present</p>
                            <h4>Back-end Developer at Coolhax Labs</h4><br/>
                            <p className = "lead">
                                Presently working as a Back-end Developer at Coolhax Labs.
                            </p>
                        </div>
                    </div><br/>
                </div>
            
            </div>
        </section>
    );
    }

export default Resume;