import Link from "next/link"

//This is the contact section in the footer of the page with the address,
//phone number, and email
export default function Contact() {
  return(
    <div className="text-white">
      <div>
        <div>1234 Fayk Adres Drive</div>
        <div>Costa Mesa, CA</div>
        <div>92626</div>
      </div>
      <a href="tel:949-232-4433">+1 (949) 232-4433</a><br/>
      <a href="mailto:">fakeemail@dal.com</a>
      <Link className={`bg-transparent border-white border-solid border-2 rounded-lg p-2 block w-36 text-center mt-3`}
        href={`/contact`}>Contact Us</Link>
    </div>
  )
}