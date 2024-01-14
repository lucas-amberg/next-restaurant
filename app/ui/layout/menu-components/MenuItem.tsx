
//This is the component that renders each individual menu item, its description
//and its price
export default function MenuItem({dishName, description, price}: {dishName: string, description?: string, price: string}) {
  return(
    <div className="flex flex-col items-center justify-center text-center p-5 w-64">
      <h1 className="font-bold text-lg">{dishName}</h1>
      <div className="text-sm italic">{description}</div>
      <div>{price}</div>
    </div>
  )
}