import MenuItem from "./MenuItem"

export default function DalRolls() {
  return(
    <div className="p-6 flex items-center justify-center flex-row flex-wrap">

      <MenuItem 
          dishName="Laurang Imperial Harmony Roll"
          description="Embark on a culinary journey with velvety Toro, premium Alaskan king crab, and succulent lobster, wrapped in soy paper, adorned with a secret, luxurious Laurang sauce."
          price="$99.99"
      />

      
      <MenuItem 
          dishName="Dal Supreme Roll"
          description="A divine creation of premium lobster, truffle-infused crab, and avocado, crowned with edible gold flakes. Unparalleled luxury on every plate."
          price="$29.99"
      />

      <MenuItem 
          dishName="Royal Dal Fusion Roll"
          description="Melt-in-your-mouth Wagyu beef, foie gras, and black caviar harmonize in this masterpiece, offering a symphony of indulgent flavors."
          price="$34.99"
      />

      <MenuItem 
          dishName="Dal Elysium Roll"
          description="Exquisite uni, toro, and edible orchid petals unite to deliver a celestial sushi experience. A rare delight for true connoisseurs."
          price="$39.99"
      />

      <MenuItem 
          dishName="Dal's Legacy Roll"
          description="A time-honored recipe featuring rare ingredients: abalone, Alaskan king crab, and white truffle oil. A culinary legacy like no other."
          price="$45.99"
      />
    </div>
  )
}