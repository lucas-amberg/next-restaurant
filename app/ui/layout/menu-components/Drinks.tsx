import MenuItem from "./MenuItem";

//This shows all of the Drink (non alcoholic) items on the menu
export default function Drinks() {
  return(
    <div className="p-6 flex items-center justify-center flex-row flex-wrap">
      <MenuItem 
          dishName="Diet Coke"
          description="Crisp and refreshing, the perfect low-calorie option to accompany your meal. Enjoy the classic taste without the guilt."
          price="$2.49"
      />
    </div>
  )
}