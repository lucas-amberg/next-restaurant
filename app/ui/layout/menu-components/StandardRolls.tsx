import MenuItem from "./MenuItem"

//This shows all of the Standard Roll items on the menu
export default function StandardRolls() {
  return(
    <div className="p-6 flex items-center justify-center flex-row flex-wrap">
      <MenuItem 
          dishName="California Roll"
          description="Crab or imitation crab, avocado, and cucumber rolled in seaweed and rice. A classic and popular sushi roll."
          price="$6.99"
      />

      <MenuItem 
          dishName="Spicy Tuna Roll"
          description="Fresh tuna mixed with spicy mayo, rolled with cucumber or avocado. A flavorful and fiery sushi delight."
          price="$8.49"
      />

      <MenuItem 
          dishName="Dragon Roll"
          description="Eel, avocado, and cucumber inside, topped with thinly sliced avocado and drizzled with eel sauce. Rich and indulgent."
          price="$12.99"
      />

      <MenuItem 
          dishName="Philadelphia Roll"
          description="Smoked salmon, cream cheese, and cucumber rolled in seaweed and rice. A creamy and savory sushi option."
          price="$9.99"
      />

      <MenuItem 
          dishName="Rainbow Roll"
          description="California roll topped with an assortment of fresh sashimi slices. Colorful and bursting with flavor."
          price="$14.99"
      />

      <MenuItem 
          dishName="Shrimp Tempura Roll"
          description="Shrimp tempura, avocado, and cucumber rolled in seaweed and rice. Crispy, creamy, and satisfying."
          price="$10.99"
      />

      <MenuItem 
          dishName="Vegetable Roll"
          description="A mix of fresh vegetables, such as cucumber, avocado, and carrot, rolled in seaweed and rice. Light and refreshing."
          price="$7.49"
      />

      <MenuItem 
          dishName="Spider Roll"
          description="Soft-shell crab, avocado, cucumber, and sprouts rolled in seaweed and rice. A crunchy and savory sushi experience."
          price="$11.99"
      />
    </div>
  )
}