import { fetchReservationData, removeOldReservations } from "@/app/lib/data"
import DeleteReservation from "@/app/ui/layout/DeleteReservation";
import { Metadata } from "next";
import Link from "next/link";

import '@/app/globals.css'
import { revalidatePath } from "next/cache";

export const metadata: Metadata = {
  title: 'Admin Panel'
}

type Reservation = 
  {name: string, email: string, number: string, partysize: string, date: string};


// This component is the reservations themselves, it features all the info regarding
// the reservation and a delete button to delete the reservation
function reservationCard({name, email, number, partysize, date, id}: {name?: string, email?: string, number?: string, partysize?: string, date?: string, id?: string}) {
  const newDate = date.split('T')
  
  return(
    <li className="p-4 h-48 shadow-2xl rounded-md border-solid border-2 border-gray-900" key={`${number} ${date}`}>
      <div className="text-xl font-bold">{name} <span className="text-sm">({partysize} people)</span></div>
      <div>{email}</div>
      <div>Phone number: {number}</div>
      <div className="text-xl">{newDate[0]} at {newDate[1]}</div>
      <DeleteReservation id={id}/>
    </li>
  )
}

// This is the reservations panel page and it displays all of the reservations
// from the database
export default async function Reservations() {

  const reservations = await fetchReservationData(); // This variable stores all of the reservations
 
  const reservationsArray = [];

  reservations.forEach((reservation) => reservationsArray.push(reservation)); // This removes the reservations from whatever datatype the SQL returns them in and puts them in an array

  // This function creates an array of ReservationCard elements from the reservations
  const reservationsElements = reservationsArray.map((reservation) => {
    return reservationCard({name: reservation.name, email: reservation.email, number: reservation.number, partysize: reservation.partysize, date: reservation.date, id: reservation.id})
  })

  // This removes all of the old reservations from the array (date < currentDate)
  removeOldReservations(reservationsArray);
  revalidatePath('/admin/reservations');

  return(
    <div className="flex flex-col items-center justify-center h-auto w-screen p-10">
      <h1 className="font-bold text-2xl">Current Reservations</h1>
      <ul className="flex flex-col md:flex-row content-center items-center flex-wrap h-100 w-100 gap-6 p-4">
        {reservationsElements.length === 0 ? <div>There are no reservations</div> : reservationsElements}
      </ul>
      <Link className='text-blue-500' href='/'>Return to Homepage</Link>
    </div>
  )
}