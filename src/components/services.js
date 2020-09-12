import React from 'react';
import './assets/services.css';

function Services() {

    return(
        <section id = "services" style = {{ background : "#222222" , marginLeft : "40px", marginRight : "40px"}}>
            <h2 className = "text-center">My <strong>Skills</strong></h2><br/>
            <div className = "row">
                {/* skill 1 */}
                <div className = "col-md-4">

                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-title text-center">
                            <i class="fab fa-html5 fa-3x mt-4" style = {{ display : "inline-block" }}></i>
                        </div>
                        <div className = "card-body">
                            <h4 className = "text-center">HTML5</h4>
                            <p className = "text-muted">Well acquainted with all the tags and features of the current used version of HTML.</p>
                        </div>
                    </div>

                </div>
                {/* skill 2 */}
                <div className = "col-md-4">

                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-title text-center">
                            <i class="fab fa-css3-alt fa-3x mt-4" style = {{ display : "inline-block" }}></i>
                        </div>
                        <div className = "card-body">
                            <h4 className = "text-center">CSS3</h4>
                            <p className = "text-muted">Well acquainted with all the designs and styles of the latest Version of CSS.</p>
                        </div>
                        
                    </div>

                </div>
                {/* skill 3 */}
                <div className = "col-md-4">

                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-title text-center">
                            <i class="fab fa-js-square fa-3x mt-4" style = {{ display : "inline-block" }}></i>
                        </div>
                        <div className = "card-body">
                            <h4 className = "text-center">Javascript</h4>
                            <p className = "text-muted">I have a good grasp on the concepts of Javascript Language.</p>
                        </div>
                    </div>

                </div>
            </div><br/>

            <div className = "row">
                {/* skill 4 */}
                <div className = "col-md-4">

                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-title text-center">
                            <i class="far fa-file-code fa-3x mt-4" style = {{ display : "inline-block" }}></i>
                        </div>
                        <div className = "card-body">
                            <h4 className = "text-center">C++</h4>
                            <p className = "text-muted">
                                I am well acquainted with all the concepts of the programming language C++.
                            </p>
                        </div>
                        
                    </div>

                </div>
                {/* skill 5 */}
                <div className = "col-md-4">

                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-title text-center">
                            <i class="fab fa-react fa-3x mt-4" style = {{ display : "inline-block" }}></i>
                        </div>
                        <div className = "card-body">
                            <h4 className = "text-center">React.js</h4>
                            <p className = "text-muted">
                                I have worked on some projects using the React.js library.
                            </p>
                        </div>
                    </div>

                </div>
                {/* skill 6 */}
                <div className = "col-md-4">

                    <div className = "card" style = {{ background : "rgb(38, 42, 43)" }}>
                        <div className = "card-title text-center">
                            <i class="fab fa-php fa-3x mt-4" style = {{ display : "inline-block" }}></i>
                        </div>
                        <div className = "card-body">
                            <h4 className = "text-center">PHP 7</h4>
                            <p className = "text-muted">
                                Have worked on different back-end APIs using scripting language PHP.
                            </p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>
    );

}

export default Services;