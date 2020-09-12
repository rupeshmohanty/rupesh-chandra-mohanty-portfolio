import React from 'react';

function Footer(){

    return(
        <div className = "footer text-center">
            <p className = "text-muted text-center">Copyright © 2020 All rights reserved | Made by Rupesh Chandra Mohanty</p>
            <div style = {{ display : "inline-block" }}>
                <div>
                    <a href = "https://www.facebook.com/rupesh.mohanty.1806/"><i class="fab fa-facebook-f fa-2x" style = {{ marginRight : "15px" }}></i></a>
                    <a href = "https://www.instagram.com/rupeshmohanty67/"><i class="fab fa-instagram fa-2x" style = {{ marginRight : "15px" }}></i></a>
                    <a href = "https://github.com/rupeshmohanty"><i class="fab fa-github fa-2x" style = {{ marginRight : "15px" }}></i></a>
                    <a href = "https://www.linkedin.com/in/rupesh-chandra-mohanty/"><i class="fab fa-linkedin fa-2x" style = {{ marginRight : "15px" }}></i></a>
                </div>
            </div>
        </div>
    );

}

export default Footer;