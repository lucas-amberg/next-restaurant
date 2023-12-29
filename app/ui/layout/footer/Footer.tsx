import { Carattere } from "next/font/google"
const carattere = Carattere({subsets: ['latin'], weight: '400'});

import QuickLinks from "@/app/ui/layout/footer/QuickLinks";

export default function Footer() {
  return(
    <div className="bg-gray-900 p-6">
      <h1 className={`${carattere.className} text-white text-3xl`}>Dal</h1>
      <div>
        <QuickLinks/>
      </div>
    </div>
  )
}