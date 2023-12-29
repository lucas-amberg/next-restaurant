import { Inter } from "next/font/google"
const inter = Inter({ subsets: ['latin'] })

//This component is a simple item which returns a bold heading title and a smaller
//description
export default function HeaderDesc({header, description}: {header?: string, description?: string}) {
  return(
    <div className="w-screen text-center p-6 shadow-lg">
      <h1 className="text-bold text-2xl p-4">{header}</h1>
      <div className={`text-sm p-4`}>{description}</div>
    </div>
  )
}