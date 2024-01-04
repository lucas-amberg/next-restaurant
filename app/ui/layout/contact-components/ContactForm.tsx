import { useState } from "react"

export default function ContactForm() {

  return(
    <form className='flex flex-col items-center justify-center gap-6 p-6 pb-12' action="">
      <label htmlFor="name">Your Name:</label>
      <input className="border-solid border-2 border-gray-900 rounded-lg p-2" type="text" id="name" name="name" />
      <label htmlFor="email">Email Address:</label>
      <input className="border-solid border-2 border-gray-900 rounded-lg p-2" type="email" id="email" name="email" />
      <label htmlFor="message">Message:</label>
      <textarea className="border-solid border-2 border-gray-900 rounded-lg p-2" id='message' name='message' rows={5} cols={28}/>
      <button className="p-4 bg-gray-900 pl-12 pr-12 m-4 text-white rounded-lg shadow-lg">Send Message</button>
    </form>
  )
}