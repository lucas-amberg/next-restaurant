import SubHeader from "../ui/layout/SubHeader"
import HeaderDesc from "../ui/layout/HeaderDesc"
import Image from "next/image";

import FancyButton from "../ui/layout/FancyButton";


export default function AboutUs() {

  const firstPartDesc = 'With over a decade of seasoned expertise, our founder Miyamoto Dal confronted a pivotal juncture in 1972, departing from his esteemed role as sensei at Tokyo\'s Sushi Kuaraha. The decision, driven by both a decade-long immersion in the art of sushi and a desire to transcend borders, marked the beginning of a transformative journey.';
  const secondPartDesc= 'Fast forward to March 1975, Dal, armed with over a decade of culinary mastery, coalesced with a dedicated team to realize his vision at Dal in the heart of Los Angeles. Their unwavering commitment to excellence fueled an exhaustive exploration for Southern California\'s quintessential Sushi. This quest, embedded in dedication and seasoned expertise, unfolded as a historic chapter, significantly shaping the gastronomic narrative of Japanese cuisine in the vibrant city of Los Angeles.';
  const thirdPartDesc = 'Today, Dal stands as a beacon of Japanese culinary excellence in the heart of Los Angeles. With a legacy built on over five decades of expertise, we continue to redefine the Sushi experience. Our commitment to authenticity and innovation resonates in every dish, inviting patrons on a gastronomic journey that bridges tradition and modernity. As we evolve, our dedication to sharing the authentic taste of Japan with the world remains unwavering, ensuring that each visit to Dal is a celebration of exquisite flavors and culinary artistry.'

  return(
    <div>
      <SubHeader text={'About Us'} className="about-us-header"/>
      <HeaderDesc header="From Japan" description={firstPartDesc}/>
      <div className="flex items-center justify-center">
        <Image className='h-5/6 w-5/6' src='/about-us-image1.jpeg' width={600} height={600} alt="a set of tasty sushi on a table in a japanese restaurant"/>
      </div>
      <HeaderDesc header="To America" description={secondPartDesc}/>
      <div className="flex items-center justify-center">
        <Image className='h-5/6 w-5/6' src='/about-us-image2.jpeg' width={600} height={600} alt="a set of tasty sushi on a table in a japanese restaurant"/>
      </div>
      <HeaderDesc header="And Today" description={thirdPartDesc}/>
      <FancyButton
        title={'View our Menu'}
        buttonTitle={'Menu'}
        href={'menu'}
        dark={true}
      />
    </div>
  )
}