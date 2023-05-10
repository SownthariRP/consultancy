import React from "react";
import Call from './call.svg';
import Mail from './mail.svg';
import Location from './location.svg';
import './contact.css';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css" integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm" crossorigin="anonymous"></link>
const Contact = () => {
  return (
    <div>
        <div class="contact1"> 
           <div class="content">
            <h2>Contact Us</h2>
            <h4>The finest steel has to go through the hottest fire.</h4>
          </div>
          <div class="container1">
            <div class="contactInfo">
                <div class="box">
                <div class="icon"><img src={Location} width="40px" alt=""/> </div>
                    <div class="text">
                        <h3>Address</h3>
                        <p> NO.127/B-1,KUNNATHUR ROAD,VELLINGADU THOTTAM,<br/> PERUMANALLUR - 641666</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><img src={Call} width="40px" alt=""/> </div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p>9876543210</p>
                    </div>
                </div>
                <div class="box">
                <div class="icon"><img src={Mail} width="40px" alt=""/> </div>
                    <div class="text">
                        <h3>E-Mail</h3>
                        <p>srisendhursteels@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="contactForm">
                <form>
                    <h2>Send Message</h2>
                    <div class="inputBox">
                        <input type="text" name="" required="required"></input>
                        <span>Full Name</span>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" required="required"></input>
                        <span>Email</span>
                    </div>
                    <div class="inputBox">
                        <textarea required="required"></textarea>
                        <span>Type your Message...</span>
                    </div>
                    <div class="inputBox">
                        <input type="submit" name=""  value="Send"></input>
                    </div>
                </form>
            </div>
          </div>
        </div>
        <iframe style={{marginTop:20,width:"100%",height:400}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250450.60037919515!2d77.1946659!3d11.2400178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90502d0365f3f%3A0xc569120dfcf9d100!2sSri%20Sendhur%20Steels!5e0!3m2!1sen!2sin!4v1679585945629!5m2!1sen!2sin" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    );
}

export default Contact;