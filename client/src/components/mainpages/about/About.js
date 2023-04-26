import React from "react";
import { Link } from "react-router-dom";
const About = () =>{
    return (
        <body className="body">
            <div class="about">
                <div class="inner-section">
                    <h1><bold>About Us</bold></h1>
                    <p class="text">
                        Sendhur steels is a prestigious steel dealer, based in and around tirupur.
                        Despite being a relatively new dealer, we have supplied steel to many important businesses that seek them.
                        We supply best quality products to our clients,and now we have ventured into online platform to access far-away customers.
                        We collect product enquiries, and send the estimated quotation at the earliest.
                    </p>
                    <div class="skills">
                        <Link to="/contact"><button>Contact Us</button></Link>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default About;