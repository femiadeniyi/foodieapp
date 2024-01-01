import React from 'react';
import {BsTwitter} from "react-icons/bs"
import {SiLinkedin} from "react-icons/si"
import {BsYoutube} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";

export default function Footer(){
	return(
          <div className="footer-wrapper">
            <div className="footer-section-one">
              <div className="footer-logo-container">
                <img src="./logo.svg" alt=""/>
              </div>
               <div className="footer-icons">
                 <BsTwitter/>
                 <SiLinkedin/>
                 <BsYoutube/>
                 <FaFacebookF/>
               </div>
            </div>
             <div className="footer-section-two">
                 <div className="footer-section-columns">
                   <span>Quality</span>
                   <span>Help</span>
                   <span>Share</span>
                   <span>Carrers</span>
                   <span>Testimonials</span>
                   <span>Work</span>
                 </div>
                  <div className="footer-section-columns">
                    <span>09063916572</span>
                    <span>femiadeniyi576@gmail.com</span>
                    <span>pressFood.com</span>
                  </div>

                  <div className="footer-section-columns">
                    <span>Term & Condition</span>
                    <span> Privacy Policy</span>
                  </div>
             </div>
          </div>
		)
}