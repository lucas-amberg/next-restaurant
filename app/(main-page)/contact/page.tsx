import { Metadata } from "next";

import SubHeader from "@/app/ui/layout/SubHeader";
import HeaderDesc from "@/app/ui/layout/HeaderDesc";
import ContactForm from "@/app/ui/layout/contact-components/ContactForm";

export const metadata: Metadata = {
  title: 'Contact Us'
}

//This is the contact us page and it has the form for users to fill out
//a message
export default function Contact() {
  return(
    <div>
      <SubHeader text="Contact Us" className="contact-header"/>
      <HeaderDesc header="Contact Us" description="Have any questions or inquiries about our establishment? Please feel free to reach out using the form below and we will respond as soon as we can!"/>
      <ContactForm/>
    </div>
  )
}