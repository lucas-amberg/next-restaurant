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


export default async function Reservations() {

  const reservations = await fetchReservationData();

  const reservationsArray = [];

  reservations.forEach((reservation) => reservationsArray.push(reservation));

  const reservationsElements = reservationsArray.map((reservation) => {
    return reservationCard({name: reservation.name, email: reservation.email, number: reservation.number, partysize: reservation.partysize, date: reservation.date, id: reservation.id})
  })

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