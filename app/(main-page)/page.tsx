import HeaderDesc from "@/app/ui/layout/HeaderDesc";
import FancyButton from "../ui/layout/FancyButton";
import Reviews from "../ui/layout/homepage-components/reviews/Reviews";

import Link from "next/link";

import { Metadata } from "next";

import SubHeader from "@/app/ui/layout/SubHeader";

export const metadata: Metadata = {
  title: 'Dal'
}

//This is the home page, the plan for the format will be:

//Header
//Image title
//Description
//Menu Button
//Reviews
//About us information
//Reservation button
//Footer

export default function Home() {

  const tasteOfTokyoDesc = 'Our experienced sushi chefs embarked on a journey to America with the noble intention of bringing a taste of their homeland to a new audience. Hailing from the picturesque regions of Kyoto, Okinawa, and Tokyo, these culinary maestros bring with them a rich heritage of gastronomic excellence that has been passed down through generations. Their artistry in the realm of sushi is a testament to centuries of tradition, and their dedication to preserving authentic flavors is unwavering. With each meticulously crafted piece of sushi, they offer a glimpse into the profound cultural and culinary tapestry of Japan, ensuring that their patrons savor not just a meal but an immersive experience.'


  return (
    <main className="bg-white w-screen">
      <SubHeader text={"Experience Sushi"} className="sushi-background"/>
      <HeaderDesc 
        twClass="shadow-lg"
        header="A Taste of Tokyo" 
        description={tasteOfTokyoDesc}
      />
      <FancyButton
        title={'View our Menu'}
        buttonTitle={'Menu'}
        href={'menu'}
        dark={true}
      />
      <Reviews/>
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
