"use client";

import { useFormState } from "react-dom"
import { useFormStatus } from "react-dom"

import { createReservation } from "@/app/actions"

const initialState = {
  message: null,
}

function SubmitButton() {
  return(
    <button type='submit' className="bg-gray-900 text-white p-2 w-20 rounded-lg">Submit</button>
  )
}

export default function ReservationsForm() {

  const [state, formAction] = useFormState(createReservation, initialState)


  return (
    <form className='flex flex-col items-center p-6 gap-4' action={formAction}>
      <label className='font-bold' htmlFor="name">Name for Reservation:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="text" id="name" name='name' required />
      <label className='font-bold' htmlFor="email">Email Address:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="email" id="email" name='email' required />
      <label className='font-bold' htmlFor="number">Phone Number:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="text" id="number" name='number' required />
      <label className='font-bold' htmlFor="size">Party Size:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="number" id="size" name='size' min='0' max='20' required />
      <SubmitButton/>
      <p>
        {state?.message}
      </p>
    </form>
  )
}