"use client";

import HeaderDesc from "../../HeaderDesc";
import ReactStars from 'react-rating-stars-component';

type ReviewProp = {
  name: string,
  date: string,
  reviewContent?: string,
  rating: number
}

function Review({name, date, reviewContent, rating}: ReviewProp) {
  
  return(
    <div className="bg-gray-200 w-64 h-64 p-4 shadow-lg rounded-lg flex flex-col">
      <h1 className="text-lg font-bold">{name}</h1>
      <h2>{date}</h2>
      <p>{`"${reviewContent}"`}</p>
      <ReactStars value={rating} count={5} edit={false} size={36}/>
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
        <Review name="Lucas A." date="Dec 2023" reviewContent="Very great restaurant! Amazing food and service, exceeded our standards. Will be back!" rating={5}/>
        <Review name="Lucas A." date="Dec 2023" reviewContent="Very great restaurant! Amazing food and service, exceeded our standards. Will be back!" rating={5}/>
      </div>
    </div>
  )
}