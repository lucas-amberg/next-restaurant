"use server";

import { fetchReservationData } from "@/app/lib/data"

type Reservation = 
  {name: string, email: string, number: string, partysize: string, date: string};


function reservationCard({name, email, number, partysize, date}: {name?: string, email?: string, number?: string, partysize?: string, date?: string}) {
  const newDate = date.split('T')
  
  return(
    <li className="p-4 shadow-2xl rounded-md border-solid border-2 border-gray-900" key={`${number} ${date}`}>
      <div className="text-xl font-bold">{name} <span className="text-sm">({partysize} people)</span></div>
      <div>{email}</div>
      <div>{number}</div>
      <div className="text-xl">{newDate[0]} at {newDate[1]}</div>
    </li>
  )
}


export default async function Reservations() {

  const reservations = await fetchReservationData();

  const reservationsArray = [];

  reservations.forEach((reservation) => reservationsArray.push(reservation));

  const reservationsElements = reservationsArray.map((reservation) => {
    return reservationCard({name: reservation.name, email: reservation.email, number: reservation.number, partysize: reservation.partysize, date: reservation.date})
  })

  return(
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="font-bold text-2xl">Current Reservations</h1>
      <ul className="flex flex-col md:flex-row flex-wrap gap-6 p-4">
        {reservationsElements}
      </ul>
    </div>
  )
}