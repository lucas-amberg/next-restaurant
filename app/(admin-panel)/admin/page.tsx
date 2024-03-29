import { Metadata } from "next";

import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Login'
}

import LoginForm from "@/app/ui/layout/LoginForm"

// This displays the login form to access the reservations
export default async function Admin() {
  return(
    <div className="flex w-screen h-screen bg-gray-900 items-center justify-center">
      <LoginForm/>
    </div>
  )
}