"use client";

import { useFormState } from "react-dom"
import { useFormStatus } from "react-dom"

import { createReservation } from "@/app/actions"

const initialState = {
  message: "",
}

function SubmitButton() {
  return(
    <button type='submit' className="bg-gray-900 text-white p-2 w-20 rounded-lg">Submit</button>
  )
}

//This form is responsible for reservations
export default function ReservationsForm() {

  //This hook is what calls the function to submit form data to the database
  const [state, formAction] = useFormState(createReservation, initialState)

  //This code gets the minimum date for the form
  let today:any = new Date();
  let dd:any = today.getDate();
  let mm:any = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0'.concat(dd);
  }
  if (mm < 10) {
    mm = '0'.concat(mm);
  }

  today = yyyy + '-' + mm + '-' + dd;



  return (
    <form className='flex flex-col items-center p-6 gap-4' action={formAction}>
      <label className='font-bold' htmlFor="name">Name for Reservation:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="text" id="name" name='name' minLength={1} required />
      <label className='font-bold' htmlFor="email">Email Address:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="email" id="email" name='email' minLength={1} required />
      <label className='font-bold' htmlFor="number">Phone Number:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="text" id="number" name='number' minLength={10} required />
      <label className='font-bold' htmlFor="size">Party Size:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="number" id="size" name='size' min='0' max='30' required />
      <label className='font-bold' htmlFor="date">Reservation Date and Time:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="datetime-local" id="date" name='date' min={today} required />
      <SubmitButton/>
      <p>
        {state?.message}
      </p>
    </form>
  )
}