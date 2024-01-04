

import HeaderDesc from "@/app/ui/layout/HeaderDesc";
import FancyButton from "./ui/layout/FancyButton";
import SushiText from "@/app/ui/layout/homepage-components/SushiText";

import Link from "next/link";

import { Metadata } from "next";

import SubHeader from "@/app/ui/layout/SubHeader";

export const metadata: Metadata = {
  title: 'Dal',
  metadataBase: new URL("https://https://next-restaurant-weld.vercel.app")
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
    <main className="bg-white w-screen">
      <SubHeader text={"Experience Sushi"} className="sushi-background"/>
      <HeaderDesc 
        twClass="shadow-lg"
        header="A Taste of Tokyo" 
        description="Our experienced sushi chefs came to America to share a 
        bite of home. From Kyoto, to Okinawa, to Tokyo, our culinary expertise 
        spans generations of tradition and centuries of authentic flavor."
      />
      <FancyButton
        title={'View our Menu'}
        buttonTitle={'Menu'}
        href={'menu'}
        dark={true}
      />
      <div className="flex flex-col items-center p-4">
        <HeaderDesc
          header="Our Story"
          description="Troubled by economics and eager to share the taste of Japan with
          the world, our founder Miyamoto Dal left his post as sensei of west Tokyo's
          finest Sushi establisment, Sushi Kuaraha in 1972. Upon arrival in Los Angeles, Dal spent
          years searching for Southern California's finest residents in Sushi. With his team,
          he opened Dal in March 1975 and the rest was history."
        />
        <Link className='bg-transparent border-gray-500 border-solid border-2 rounded-lg p-3 m-4 block w-36 text-center'
        href={`/about-us`}>About Us</Link>
      </div>
      <FancyButton
        title={'Make a Reservation'}
        buttonTitle="Reservations"
        href={'reservations'}
        dark={true}
      />
    </main>
  )
}
