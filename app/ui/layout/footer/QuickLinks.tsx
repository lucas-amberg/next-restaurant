import Link from "next/link"

import { Carattere } from "next/font/google"
const carattere = Carattere({subsets: ['latin'], weight: '400'});

//This is the links in the footer
export default function QuickLinks() {
  return(
    <div className="flex flex-col text-white">
      <h1 className={`${carattere.className} text-white text-3xl`}>Dal</h1>
      <Link href="/">Home</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/about-us">About</Link>
      <Link href="/reservations">Reservations</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}