"use client";

import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

import {slide as Menu} from 'react-burger-menu';

import { Fade } from 'react-awesome-reveal';

import "@/app/ui/layout/navbar-components/burger-styles.css"

import Link from 'next/link'

export default function MobileNav() {
  return(
    <Menu width={260} right>
      <div className={`${inter.className} text-center text-xl`}>
        <Fade cascade direction='right' damping={0.1}>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about-us">About</Link>
          <Link href="/reservations">Reservations</Link>
          <Link href="/contact">Contact</Link>
        </Fade>
      </div>
    </Menu>
  )
}