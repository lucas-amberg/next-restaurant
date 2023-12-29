"use client";

import { Fade } from "react-awesome-reveal"

import HeaderDesc from "@/app/ui/layout/HeaderDesc";
import FancyButton from "./ui/layout/FancyButton";

//This is the home page, the plan for the format will be:

//Header
//Image title
//Description
//Menu Button
//About us information
//Reservation button
//Footer

export default function Home() {
  return (
    <main className="bg-white w-screen h-screen">
      <div className="sushi-background h-64 bg-black font-bold text-white flex items-end p-10 text-3xl">
        <Fade className="shadow-lg" cascade damping={0.1} direction="up">Experience Sushi</Fade>
      </div>
      <HeaderDesc 
        header="A Taste of Tokyo" 
        description="Our experienced sushi chefs came to America to share a 
        bite of home. From Kyoto, to Okinawa, to Tokyo, our culinary expertise 
        spans generations of tradition and centuries of authentic flavor."
      />
      <FancyButton
        title={'Learn More'}
        buttonTitle={'About Us'}
        href={'about-us'}
      />
    </main>
  )
}
