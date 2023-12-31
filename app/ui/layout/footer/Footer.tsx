

import QuickLinks from "@/app/ui/layout/footer/QuickLinks";
import Contact from "@/app/ui/layout/footer/Contact";
import Copyright from "@/app/ui/layout/footer/Copyright";

export default function Footer() {
  return(
    <div className="bg-gray-900 p-6 w-screen">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-evenly p-6">
        <QuickLinks/>
        <Contact/>
      </div>
      <Copyright/>
    </div>
  )
}