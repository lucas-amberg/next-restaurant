import SushiText from "@/app/ui/layout/homepage-components/SushiText"

//This component will return the sub header at the top of every page that has 
//an image background and animated text
export default function SubHeader({text, className}: {text: string, className: string}) {
  return(
    <div className={`${className} h-64 bg-black font-bold text-white flex items-end p-10 text-3xl`}>
        <SushiText text={text}/>
    </div>
  )
}