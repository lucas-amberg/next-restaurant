"use server";

import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres'
import { z } from 'zod'

export async function createReservation(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().min(1),
    number: z.string().min(1),
    partySize: z.string().min(1),
    date: z.string().min(1)
  })

  const data = schema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    number: formData.get('number'),
    partySize: formData.get('size'),
    date: formData.get('date')
  })

  try {
    await sql`
    INSERT INTO reservations (name, email, number, partySize, date)
    VALUES (${data.name}, ${data.email}, ${data.number}, ${data.partySize}, ${data.date})`

    return { message: "Successfully added your reservation"}
  }
  catch (e) {
    console.log(e)
    return { message: 'Failed to create reservation'}
  }
}