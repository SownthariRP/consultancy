import React from "react";
import bg from './bg6.jpg';
import brand1 from './tata.png';
import brand2 from './jsw.png';
import brand3 from './sail.png';
import brand4 from './essar.png';
import icon1 from './delivery.png';
import icon2 from './refund.png';
import icon3 from './invoice.png';
import icon4 from './quailty.png';
import icon5 from './wholesale.png';
const Home = () => {
    return (
        <div className="home">
            <div className="carousel">
                <img src={bg} width="20px"/>
            </div>
            <div className="brand">
                <div className="title">
                    Our Popular Brands
                </div>
                <div className="images">
                    <img src={brand1} width="250px"/>
                    <img src={brand2} width="250x"/>
                    <img src={brand3} width="150px"/>
                    <img src={brand4} width="250px"/>
                </div>
            </div>
            <div className="shop">
                    <div className="title1">
                        Shop With Confidence
                    </div>
                    <div className="icons">
                        <div className="icon1">
                            <img src={icon1} width="100px"/>
                            <p>Hassle Free Delivery</p>
                        </div>
                        <div className="icon1">
                            <img src={icon2} width="100x"/>
                            <p>Easy Refund and <br/>cancellation policy</p>
                        </div>
                        <div className="icon1">
                            <img src={icon3} width="100x"/>
                            <p>Payment on Invoice</p>
                        </div>
                        <div className="icon1">
                            <img src={icon4} width="100x"/>
                            <p>Quality products</p>
                        </div>
                        <div className="icon1">
                            <img src={icon5} width="100x"/>
                            <p>Wholesale Prices</p>
                        </div>
                    </div>
            </div>

        </div>
        
    )
}
export default Home;