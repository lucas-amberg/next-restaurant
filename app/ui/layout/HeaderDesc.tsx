import { Inter } from "next/font/google"
const inter = Inter({ subsets: ['latin'] })

//This component is a simple item which returns a bold heading title and a smaller
//description
export default function HeaderDesc({header, description, twClass}: {header?: string, description?: string, twClass?: string}) {
  return(
    <div className={`${twClass} w-screen text-center p-6`}>
      <h1 className="text-bold text-2xl p-4">{header}</h1>
      <div className={`text-sm sm:text-md p-4`}>{description}</div>
    </div>
  )
}