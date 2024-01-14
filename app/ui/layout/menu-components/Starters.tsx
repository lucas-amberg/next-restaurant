import MenuItem from "./MenuItem"

//This shows all of the Starter items on the menu
export default function Starters() {
  return(
    <div className="p-6 flex items-center justify-center flex-row flex-wrap">
      <MenuItem 
        dishName="Edamame Delight"
        description="Steamed soybeans tossed in sea salt and sesame oil. A perfect, healthy start."
        price="$5.99"
        />
      <MenuItem 
        dishName="Crispy Shrimp Tempura"
        description="Lightly battered shrimp, fried to perfection. Served with zesty tempura sauce. Crunchy and delightful."
        price="$8.99"
        />
      <MenuItem 
        dishName="Spicy Tuna Tartare"
        description="Fresh tuna mixed with spicy mayo, avocado, and crunchy tempura flakes. A flavorful fusion."
        price="$10.99"
        />
      <MenuItem 
        dishName="Miso Glazed Eggplant"
        description="Grilled Japanese eggplant glazed with sweet miso. A savory and vegetarian delight."
        price="$7.99"
        />
      <MenuItem 
        dishName="Sakura Spring Rolls"
        description="Colorful vegetable spring rolls with shrimp, wrapped in rice paper. Served with tangy plum sauce."
        price="$6.99"
        />
      <MenuItem 
        dishName="Sushi Nachos"
        description="Crispy wonton chips topped with spicy tuna, avocado, and drizzled with eel sauce. A fusion fiesta."
        price="$12.99"
        />
    </div>
  )
}