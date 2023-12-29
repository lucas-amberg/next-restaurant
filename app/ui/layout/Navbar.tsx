"use client";

import { Carattere } from "next/font/google"

import { Fade } from 'react-awesome-reveal'

import MobileNav from "./navbar-components/MobileNav";

const carattere = Carattere({subsets: ['latin'], weight: '400'});

export default function Navbar() {
  
  return(
    <div className={`${carattere.className} h-16 bg-gray-300 flex items-center p-4`}>
      <Fade direction={'left'} triggerOnce={true}>
        <div className="text-4xl">
          Dal
        </div>
      </Fade>
      <MobileNav/>
    </div>
  )
}