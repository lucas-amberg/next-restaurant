import Link from "next/link"

export default function QuickLinks() {
  return(
    <div className="flex flex-col text-white">
      <Link href="/">Home</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/about-us">About</Link>
      <Link href="/reservations">Reservations</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}