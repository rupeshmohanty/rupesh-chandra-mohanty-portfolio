import React from 'react';
import './assets/blogs.css';
import blog1 from './assets/images/blog1.jpeg';
import blog2 from './assets/images/blog2.gif';
import blog3 from './assets/images/blog3.jpeg';

function Blogs(){

    return(
        <section id = "blogs" style = {{ background : "#222222"}}>
            <h2 className = "text-center">My <strong>Blogs</strong></h2><br/>
            <div className = "row pl-auto pr-auto"> 
                <div className = "col-md-4">
                    <div className = "card" style = {{ background : "#222222" }}>
                        <img src = { blog1 } className="card-img-top" alt = "Where to start as a Developer"/>
                        <div className = "card-body">
                            <h4>Where to start as a Developer?</h4>
                            <a className = "btn btn-outline-light" href = "https://dev.to/spectrumcetb/where-to-start-as-a-developer-217h">Read</a>
                        </div>
                    </div>
                </div>
                <div className = "col-md-4">
                <div className = "card" style = {{ background : "#222222" }}>
                        <img src = { blog2 } className="card-img-top"  alt = "Chat Application using PHP"/>
                        <div className = "card-body">
                            <h4>Chat Application using PHP</h4>
                            <a className = "btn btn-outline-light" href = "https://dev.to/spectrumcetb/chat-application-using-php-20ha">Read</a>
                        </div>
                    </div>
                </div>
                <div className = "col-md-4">
                <div className = "card" style = {{ background : "#222222" }}>
                        <img src = { blog3 } className="card-img-top"  alt = "Github Automation"/>
                        <div className = "card-body">
                            <h4>Create a Github Repository using Web Automation</h4>
                            <a className = "btn btn-outline-light" href = "https://dev.to/spectrumcetb/create-a-github-repository-using-web-automation-n8b">Read</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Blogs;