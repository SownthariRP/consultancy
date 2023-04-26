import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='address'>
            <div className='title'>
                Sri Sendhur Steels
            </div>
            <div className='addressline'>
                NO.127/B-1, <br/>
                Kunnathur Road,<br/>
                Vellingadu Thottam,<br/>
                Perumanallur - 641666
            </div>
            <div className='email'>
                E-mail: srisendhursteels@gmail.com
            </div>
        </div>
        <div className='office'>
            <div className='title'>
                    Office Hours
            </div>
            <div className='content'>
                Monday - Saturday<br/>
                09:30 AM to 08:30 PM
            </div>
        </div>
        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250450.60037919515!2d77.1946659!3d11.2400178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90502d0365f3f%3A0xc569120dfcf9d100!2sSri%20Sendhur%20Steels!5e0!3m2!1sen!2sin!4v1679585945629!5m2!1sen!2sin" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>
  );
};

export default Footer;