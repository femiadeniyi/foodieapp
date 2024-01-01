import React from 'react';
import {AiFillStar} from "react-icons/ai";

export default function Testimonials(){
	return(
         <div className="work-section-wrapper">
           <div className="work-section-top">
             <p className="primary-subheading">Testimonials</p>
              <h1 className="primary-heading">What They Are Saying</h1>
               <p className="primary-text">
                 Lorem ipsum dolor sit amet, 
                 consectetur adipiscing elit, 
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               </p>
           </div>
             <div className="testimonial-section-bottom">
               <img src="../john-doe-image.png" alt=""/>

               <p>
                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam,
               </p>
                <div className="testimonials-stars-container">
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
                <h2>Mark John</h2>
             </div>
         </div>
		)
}

 