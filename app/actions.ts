"use server";

import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres'
import { z } from 'zod'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

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

  const id = Date.now().toString()

  try {
    await sql`
    INSERT INTO reservations (name, email, number, partySize, date, id)
    VALUES (${data.name}, ${data.email}, ${data.number}, ${data.partySize}, ${data.date}, ${id})`

    return { message: "Successfully added your reservation"}
  }
  catch (e) {
    console.log(e)
    return { message: 'Failed to create reservation'}
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  }
}

export async function deleteReservation(id: string) {
  try {
        console.log(id)
        await sql`DELETE FROM reservations WHERE id = ${id}`;
        console.log('yo');
        revalidatePath('/admin/reservations');
    }
    catch(error) {
      console.error('Error deleting reservation: ', error);
        return {
            message: 'Database Error: failed to delete reservation.'
        }
    }
}