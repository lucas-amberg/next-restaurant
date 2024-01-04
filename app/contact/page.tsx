import { Metadata } from "next";

import SubHeader from "../ui/layout/SubHeader";

export const metadata: Metadata = {
  title: 'Contact Us'
}

export default function Contact() {
  return(
    <div>
      <SubHeader text="Contact Us" className="contact-header"/>
    </div>
  )
}