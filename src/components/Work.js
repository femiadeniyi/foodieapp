import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
export default function Work(){
	const workInfoData =[
     {
	"image": PickMeals,
     "title": "Pick Meals",
     "text": "Lorem ipsum dolor sit amit consectetur. maexenas eric et",
     },

     {
       "image": ChooseMeals,
       "title":"choose How Often",
       "text": "Lorem ipsum dolor sit amit consectetur.maexenas eric et",
     },

     {
     	"image": DeliveryMeals,
     	"title": "Fast Deliveries",
     	"text": "Lorem ipsum dolor sit amit consectetur.maexenas eric et",
     },


	]
	return (
             <div className="work-section-wrapper">
              <div className="work-section-top">
               <p className="primary-subheading">Tork</p>
                <h1 className="primary-heading">How It Work</h1>
                <p className="primary-text">
                  Lorem ipsum Lorem ipsum dolor sit amit consectetur maexenas eric et
                  elit Dolor turpis Molestie dui magins faciliios at fringilla quan
                </p>
                </div>

                <div className="work-section-bottom">
                 {workInfoData.map((card) => (
                 		<div className="work-section-info">
                          <div className="info-boxes-img-container">
                              <img src={card.image} alt=""/>
                           </div>
                           <h2>{card.title}</h2>
                           <p>{card.text}</p>
                 		</div>
                 	))}
                 </div>
                 </div>
		);
};