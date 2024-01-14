import MenuItem from "./MenuItem"


//This shows all of the Specialty Roll items on the menu
export default function SpecialtyRolls() {
  return(
    <div className="p-6 flex items-center justify-center flex-row flex-wrap">
      <MenuItem 
          dishName="Sunset Roll"
          description="Spicy tuna, avocado, and cucumber rolled inside, topped with fresh salmon and a drizzle of spicy mayo. Vibrant and flavorful."
          price="$13.99"
      />

      <MenuItem 
          dishName="Volcano Roll"
          description="Baked scallops and crab mix on top of a California roll, drizzled with spicy mayo and eel sauce. A creamy and indulgent delight."
          price="$15.99"
      />

      <MenuItem 
          dishName="Caterpillar Roll"
          description="Eel and cucumber inside, topped with thinly sliced avocado and eel sauce. Elegant and visually appealing."
          price="$14.49"
      />

      <MenuItem 
          dishName="Rainbow Dragon Roll"
          description="Dragon roll with assorted sashimi slices on top, creating a colorful and delicious masterpiece. A feast for the senses."
          price="$16.99"
      />

      <MenuItem 
          dishName="Crunchy Munch Roll"
          description="Shrimp tempura, spicy tuna, and avocado rolled inside, coated with crunchy tempura flakes. A textural delight."
          price="$12.99"
      />

      <MenuItem 
          dishName="Mango Tango Roll"
          description="Fresh mango, crab, and avocado rolled inside, topped with slices of mango. Sweet, tropical, and refreshing."
          price="$14.99"
      />

      <MenuItem 
          dishName="Tiger Eye Roll"
          description="Spicy tuna and avocado rolled inside, topped with spicy mayo and eel sauce, then baked to perfection. A flavorful twist."
          price="$13.49"
      />

      <MenuItem 
          dishName="Black Widow Roll"
          description="Soft-shell crab, spicy tuna, and avocado rolled inside, topped with black tobiko. Bold and visually striking."
          price="$16.49"
      />

      <MenuItem 
          dishName="Fuji Mountain Roll"
          description="Shrimp tempura, spicy crab, and avocado rolled inside, topped with spicy mayo and eel sauce. A mountain of flavors."
          price="$15.99"
      />

      <MenuItem 
          dishName="Sakura Blossom Roll"
          description="Tuna, avocado, and mango rolled inside, topped with slices of tuna and a drizzle of mango sauce. A floral and fruity delight."
          price="$17.99"
      />

      <MenuItem 
          dishName="Golden Dragon Roll"
          description="Eel, avocado, and cream cheese rolled inside, topped with thin avocado slices and eel sauce. Rich and luxurious."
          price="$18.49"
      />

      <MenuItem 
          dishName="Firecracker Roll"
          description="Spicy salmon, jalapeño, and avocado rolled inside, topped with spicy mayo and sriracha. A spicy explosion of flavors."
          price="$14.99"
      />

    </div>
  )
}