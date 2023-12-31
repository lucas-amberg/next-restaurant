"use client";

import Link from "next/link";
import { Fade } from 'react-awesome-reveal';

import { Diphylleia } from 'next/font/google';
const diphylleia = Diphylleia( { subsets: ['latin'], weight: '400'} );

export default function DesktopNav() {
  return(
    <Fade direction="right">
      <div className={`hidden lg:flex text-white flex-row items-center justify-end gap-10 ${diphylleia.className}`}>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about-us">About</Link>
        <Link href="/reservations">Reservations</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </Fade>
  )
}