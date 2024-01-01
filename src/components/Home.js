import React from 'react';
import Navbar from "./Navbar";
import {FiArrowRight} from "react-icons/fi"


export default function Home(){
	return(
          <div className="home-container">
            <Navbar/>
             <div className="home-banner-container">
              <div className="home-bannerImage-container">
                 <img src="../home-banner-background.png" alt=""/>
              </div>
               <div className="home-text-section">
                 <h1 className="primary-heading">
                   Your Favourite Food Delivering Hot & Fresh
                 </h1>

                 <p className="primary-text">
                   Healthy switcher chef do all the prop work, like peeding chopping & marinating, so you can cook a fresh food
                 </p>
                  <button className="secondary-button">
                     Order Now <FiArrowRight/>
                  </button>
               </div>
                <div className="home-image-container">
                  <img src="../home-banner-image.png" alt=""/>
                </div>
             </div>
            </div>
		)
}