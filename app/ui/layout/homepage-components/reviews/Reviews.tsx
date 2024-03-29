"use client";

import HeaderDesc from "../../HeaderDesc";
import ReactStars from 'react-rating-stars-component';

//This is the typing for the props for each review
type ReviewProp = {
  name: string,
  date: string,
  reviewContent?: string,
  rating: number
}

//This component is for each individual review showing the reviewer name, the
//score in stars, and an optional comment
function Review({name, date, reviewContent, rating}: ReviewProp) {
  
  return(
    <div className="bg-gray-200 w-64 h-64 p-4 shadow-lg rounded-lg flex gap-2 flex-col">
      <h1 className="text-lg font-bold">{name}</h1>
      <h2>{date}</h2>
      <p className="italic">{reviewContent === '' ? '' : `"${reviewContent}"`}</p>
      <div className="mt-auto">
        <ReactStars value={rating} count={5} edit={false} size={36}/>
      </div>
    </div>
  )
}

//The purpose of this component is to display reviews from customers
export default function Reviews() {
  return(
    <div>
      <HeaderDesc header="Reviews" description="View some reviews from our patrons:"/>
      <div className="flex flex-wrap gap-12 w-screen p-8 items-center justify-center">
        <Review name="Lucas A." date="Dec 2023" reviewContent="Very great restaurant! Amazing food and service, exceeded our standards. Will be back!" rating={5}/>
        <Review name="Lauren W." date="Aug 2023" reviewContent="Absolutely great food. Will be back" rating={5}/>
        <Review name="Phil G." date="Nov 2023" reviewContent="" rating={5}/>
        <Review name="Dan B." date="Nov 2023" reviewContent="Will come back to Costa Mesa just for this food! Amazing service, pleasure to dine here." rating={5}/>
      </div>
    </div>
  )
}