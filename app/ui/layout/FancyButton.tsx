import Link from "next/link"

//The purpose of this component is to create a button component which looks good on any page
export default function FancyButton({title, buttonTitle, href, dark}: {title?: string, buttonTitle: string, href: string, dark: boolean}) {
  
  //This object and the if statement will determine whether the component should be dark or not and will update the class as needed.
  let darkClass = {
    background: '',
    text: '',
    border: 'border-gray-500'
  }

  if (dark) {
    darkClass.background = 'bg-gray-900',
    darkClass.border= 'border-white',
    darkClass.text = 'text-white'
  }
  
  return(
    <div className={`${darkClass.background} ${darkClass.text} flex flex-col items-center justify-center p-8 gap-4`}>
      <h1 className="text-2xl text-center ">{title}</h1>
      <Link className={`bg-transparent ${darkClass.border} border-solid border-2 rounded-lg p-3 block w-36 text-center`}
        href={`/${href}`}>{buttonTitle}</Link>
    </div>
  )
}