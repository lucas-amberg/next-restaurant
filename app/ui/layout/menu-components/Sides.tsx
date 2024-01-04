import MenuItem from "./MenuItem"

export default function Sides() {
  return(
    <div className="p-6 flex items-center justify-center flex-row flex-wrap">
      <MenuItem 
          dishName="Miso Soup"
          description="A classic Japanese soup made with fermented soybean paste, tofu, seaweed, and green onions. Warm and comforting."
          price="$3.99"
      />

      <MenuItem 
          dishName="Seaweed Salad"
          description="A refreshing salad featuring mixed seaweed, sesame seeds, and a light vinaigrette. Crisp and full of ocean flavors."
          price="$5.49"
      />

      <MenuItem 
          dishName="Agedashi Tofu"
          description="Deep-fried tofu cubes served in a flavorful dashi broth, garnished with grated daikon and green onions. Crispy and savory."
          price="$4.99"
      />

      <MenuItem 
          dishName="Yakitori Skewers"
          description="Grilled chicken skewers glazed with a sweet and savory yakitori sauce. Juicy and packed with flavor."
          price="$6.99"
      />

      <MenuItem 
          dishName="Edamame Hummus"
          description="Creamy hummus made with edamame, served with crispy wonton chips. A unique twist on a classic appetizer."
          price="$4.79"
      />

    </div>
  )
}