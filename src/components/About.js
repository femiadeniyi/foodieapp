import React from 'react';
import AboutBackground from "../Assets/about-background.png"
import {BsFillPlayCircleFill} from "react-icons/bs";
export default function About() {
	return(
          <div className="about-section-container">
            <div className="about-background-image-container">
              <img src={AboutBackground} alt=""/>
            </div>
              <div className="about-section-image-container">
                <img src="../about-background-image.png" alt=""/>
              </div>

              <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                  Food Is An Important Part Of A Balanced Diet
                </h1>
                 <p className="primary-text">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean sodales efficitur velit eget porttitor. Proin maximus a 
                    lectus eget lacinia. Aenean eu mattis ex, ac posuere risus. Vivamus convallis justo ut erat
                 </p>

                 <p className="primary-text">
                   Non tincident magana non et elit Dolor turpis Molestie dui 
                   ,agnis facilisis at fringilla guan
                 </p>
                 <div className="about-buttons-container">
                   <button className="secondary-button">Learn More</button>
                   <button className="Watch-video-button"><BsFillPlayCircleFill/> Watch Video</button>
                 </div>
              </div>
          </div> 
		)
}