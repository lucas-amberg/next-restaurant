import Link from "next/link"

//The purpose of this component is to create a button component which looks good on any page
export default function FancyButton({title, buttonTitle, href}: {title?: string, buttonTitle: string, href: string}) {
  return(
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      <h1 className="text-2xl text-center ">{title}</h1>
      <Link className='bg-transparent border-gray-500 border-solid border-2 rounded-lg p-3 block w-28 text-center'
        href={`/${href}`}>{buttonTitle}</Link>
    </div>
  )
}