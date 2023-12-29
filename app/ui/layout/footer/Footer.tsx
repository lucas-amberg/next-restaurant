import { Carattere } from "next/font/google"
const carattere = Carattere({subsets: ['latin'], weight: '400'});

import QuickLinks from "@/app/ui/layout/footer/QuickLinks";
import Contact from "@/app/ui/layout/footer/Contact";
import Copyright from "@/app/ui/layout/footer/Copyright";

export default function Footer() {
  return(
    <div className="bg-gray-900 p-6">
      <h1 className={`${carattere.className} text-white text-3xl`}>Dal</h1>
      <div className="flex flex-col gap-3">
        <QuickLinks/>
        <Contact/>
      </div>
      <Copyright/>
    </div>
  )
}