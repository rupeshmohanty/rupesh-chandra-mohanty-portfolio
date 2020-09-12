import React from 'react';
import me from './assets/images/me.jpeg';
import './assets/about.css';
import resume from './assets/images/Rupesh ChandraMohanty.pdf';

function About() {

    return(
        <section id = "about" style = {{ background : "#222222" , marginLeft : "40px", marginRight : "40px"}}>
            <div className = "row">
                {/* My photo */}
                <div className = "col-md-6">

                    <img src = { me } alt = "Rupesh Chandra Mohanty" width = "600"/>

                </div>
                {/* About me */}
                <div className = "col-md-6">
                    <h2 className = "text-center">About <strong>Me</strong></h2><br/>
                    <p>
                    Highly organized and detail-oriented undergraduate from CET, Bhubaneswar seeking an entry-level position as a web developer. Served as back-end and front-end developer at different organizations having advanced knowledge of C++, PHP, React, Javascript, HTML, CSS and web hosting on various servers.
                    </p>

                    <div>
                        <a className = "btn btn-outline-success" href = { resume }>Download CV</a>&nbsp;
                        <a className = "btn btn-outline-light" href = "#contact">Hire me</a>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    );

}

export default About;