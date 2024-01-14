"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/actions";

//This is the login form element to access the reservation panel
export default function LoginForm() {

  //This useFormState will access the authentication action to check if the credentials are valid
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);





  return(
    <form action={dispatch} className="flex flex-col gap-4 justify-center items-center shadow-2xl bg-white p-12 rounded-lg">
      <label htmlFor="username">Username:</label>
      <input className="border-solid border-gray-900 border-2 p-2 rounded-sm" type="text" id="username" name="username"/>
      <label htmlFor="password">Password:</label>
      <input className="border-solid border-gray-900 border-2 p-2 rounded-sm" type="password" id="password" name="password"/>
      <LoginButton/>
      <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
    </form>
  )
}

//This button will log the user in
function LoginButton() {
  const {pending} = useFormStatus();
  return (
    <button className="w-24 bg-gray-900 rounded-lg p-2 pl-6 pr-6 text-white" aria-disabled={pending}>
      Log In
    </button>
  )
}