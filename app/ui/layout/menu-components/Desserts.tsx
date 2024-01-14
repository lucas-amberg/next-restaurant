import MenuItem from "./MenuItem"

//This shows all of the Dessert items on the menu
export default function Desserts() {
  return(
    <div className="p-6 flex items-center justify-center flex-row flex-wrap">
      <MenuItem 
          dishName="Green Tea Matcha Cheesecake"
          description="A velvety green tea-infused cheesecake with a delicate matcha flavor, served with a drizzle of raspberry coulis."
          price="$7.99"
      />

      <MenuItem 
          dishName="Mochi Ice Cream Sampler"
          description="Assorted mochi ice cream bites in flavors like mango, green tea, and red bean. A sweet and chewy treat."
          price="$6.49"
      />

      <MenuItem 
          dishName="Sesame Seed Balls (Tang Yuan)"
          description="Warm, gooey sesame seed-filled rice balls in a sweet ginger soup. A comforting and traditional Asian dessert."
          price="$5.99"
      />
    </div>
  )
}