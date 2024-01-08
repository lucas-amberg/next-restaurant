import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

type User = {
  id: string,
  username: string,
  password: string
};

async function getUser(username: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE username=${username}`;
    return user.rows[0]
  } catch (error) {
    console.error('Failed to fetch user ', error);
    throw new Error('Failed to fetch user.');
  }
}


 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
      const parsedCredentials = z.object({
        username: z.string(),
        password: z.string(),
      }).safeParse(credentials)

      if (parsedCredentials.success) {
        const {username, password} = parsedCredentials.data;
        const user = await getUser(username);
        if (!user) return null;
        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (passwordsMatch) {
          return (user)
        };
      }

      console.log('Invalid credentials');
      return null;

    }
  })],
});