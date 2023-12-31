"use client";

import { Carattere } from "next/font/google"

import { Fade } from 'react-awesome-reveal'
import Link from "next/link";

import MobileNav from "./navbar-components/MobileNav";
import DesktopNav from "./navbar-components/DesktopNav";

const carattere = Carattere({subsets: ['latin'], weight: '400'});

//This NavBar component will sit at every page

//MobileNav is the burger menu shown on mobile screens
//DesktopNav (not implemented yet) is the header links which will be shown on larger
//screens
export default function Navbar() {
  
  return(
    <div className={`${carattere.className} h-16 bg-gray-900 flex items-center p-4 justify-between`}>
      <Fade direction={'left'} triggerOnce={true}>
        <Link href='/' className="text-4xl text-white">
          Dal
        </Link>
      </Fade>
      <MobileNav/>
      <DesktopNav/>
    </div>
  )
}