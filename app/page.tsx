

import HeaderDesc from "@/app/ui/layout/HeaderDesc";
import FancyButton from "./ui/layout/FancyButton";
import SushiText from "@/app/ui/layout/homepage-components/SushiText";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dal'
}

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
        <SushiText/>
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
