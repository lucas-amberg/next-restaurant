export default function MenuHeader({title}: {title: string}) {
  return(
    <div className="flex flex-col items-center justify-center h-20 gap-3">
      <div className="text-2xl font-bold text-black">{title}</div>
      <div className="w-64 h-1 bg-black rounded-md"></div>
    </div>
  )
}