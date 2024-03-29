import { sql } from "@vercel/postgres";
import { unstable_noStore } from "next/cache";
import { deleteReservation } from "../actions";

//This function fetches all of the reservations from the SQL database
export async function fetchReservationData() {
  unstable_noStore();
  try { 
    const data = await sql`
    SELECT name, email, number, partysize, date, id
    FROM reservations
    ORDER BY date ASC`;

    const reservationData = data.rows
    return reservationData;
  } catch (error) {
    console.error('Database error: ', error);
    throw new Error('Failed to fetch reservations');
  }
}

//This function checks the date of all of the reservations when the admin
//panel is accessed and removes all of the reservations from dates prior to the current
//date
export async function removeOldReservations(reservationsArray) {
  for (const reservation of reservationsArray) {
    const reservationDate = reservation.date.split('T')[0].split('-');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;

    if (reservationDate[0] <= currentYear && reservationDate[1] <= currentMonth && reservationDate[2] < currentDay) {
      deleteReservation(reservation.id);
    }

  }

}