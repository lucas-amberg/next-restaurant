import { sql } from "@vercel/postgres";
import { unstable_noStore } from "next/cache";

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