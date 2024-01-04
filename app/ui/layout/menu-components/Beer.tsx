import MenuItem from "./MenuItem"

export default function Beer() {
  return(
    <div className="p-6 flex items-center justify-center flex-row flex-wrap">
      <MenuItem 
          dishName="Japanese Sapporo Premium Lager"
          description="A clean and crisp Japanese lager with a mild hop bitterness, a perfect complement to sushi."
          price="$5.99 (Draft)"
      />

      <MenuItem 
          dishName="Belgian Chimay Blue (Grande Réserve)"
          description="A rich and complex Belgian strong dark ale with notes of dark fruit and chocolate. A beer to savor."
          price="$9.99 (Draft)"
      />

      <MenuItem 
          dishName="American IPA (Local Craft)"
          description="Bursting with hop flavors and aromas, this IPA offers a bold and refreshing profile for hop enthusiasts."
          price="$6.99 (Draft)"
      />

      <MenuItem 
          dishName="German Weihenstephaner Hefeweissbier"
          description="A classic German wheat beer with a fruity and spicy profile, delivering a smooth and satisfying experience."
          price="$7.49 (Draft)"
      />

      <MenuItem 
          dishName="Irish Guinness Stout"
          description="Iconic and rich, this Irish stout boasts a velvety texture with flavors of coffee and chocolate. A timeless choice."
          price="$6.99 (Draft)"
      />

      <MenuItem 
          dishName="Mexican Pacifico Clara"
          description="A light and crisp Mexican lager with a mild hop character, perfect for easy sipping on a warm day."
          price="$4.99 (Draft)"
      />
    </div>
  )
}