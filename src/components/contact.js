import React from 'react';
import contact from './assets/images/contact.svg';

function Contact(){

    return(
        <section id = "contact" style = {{ background : "#222222", marginLeft : "40px", marginRight : "40px" }}>
            <h2 className = "text-center">Get in <strong>Touch</strong></h2><br/>
            <div className = "row">

                <div className = "col-md-6" style = {{ marginTop : "50px" }}>
                    <img src = { contact } alt = "Contact Me" width = "500"/>
                </div>

                <div className = "col-md-6">
                    <p className = "text-muted">Email</p>
                    <p className = "lead">rupeshmohanty67@gmail.com</p><br/>

                    <p className = "text-muted">Phone</p>
                    <p className = "lead">+91 9348372640</p><br/>

                    <p className = "text-muted">Address</p>
                    <p className = "lead">
                        MIG - 138, Udayagiri Vihar<br/>
                        Patrapada<br/>
                        Bhubaneswar, Odisha<br/>
                        India<br/>    
                    </p>    
                </div>

            </div>
        </section>
    );

}

export default Contact;