import MenuItem from "./MenuItem"

//This shows all of the Cocktail items on the menu
export default function Cocktails() {
  return(
    <div className="p-6 flex items-center justify-center flex-row flex-wrap">
      <MenuItem 
          dishName="Dal's Opulent Elixir"
          description="A Dal specialty cocktail featuring rare spirits, handcrafted bitters, and gold leaf garnish. An extravagant and unforgettable experience."
          price="$200"
      />
    </div>
  )
}