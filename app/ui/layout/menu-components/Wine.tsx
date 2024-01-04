import MenuItem from "./MenuItem"

export default function Wine() {
  return(
    <div className="p-6 flex items-center justify-center flex-row flex-wrap">
      <MenuItem 
          dishName="Chardonnay"
          description="A well-balanced Chardonnay with notes of citrus and oak, perfect for pairing with seafood."
          price="$8.99 (Glass) / $29.99 (Bottle)"
      />

      <MenuItem 
          dishName="Sauvignon Blanc"
          description="A zesty Sauvignon Blanc with refreshing acidity, featuring citrus and tropical fruit flavors."
          price="$7.99 (Glass) / $24.99 (Bottle)"
      />

      <MenuItem 
          dishName="Pinot Noir"
          description="An elegant Pinot Noir with soft tannins and red fruit notes, versatile enough to accompany various dishes."
          price="$9.99 (Glass) / $34.99 (Bottle)"
      />

      <MenuItem 
          dishName="Cabernet Sauvignon"
          description="A bold Cabernet Sauvignon with rich blackberry and cassis flavors, ideal for hearty meals."
          price="$10.99 (Glass) / $39.99 (Bottle)"
      />

      <MenuItem 
          dishName="Rosé Wine"
          description="A crisp and fruity rosé with hints of strawberry and citrus, perfect for a light and refreshing sip."
          price="$8.49 (Glass) / $27.99 (Bottle)"
      />

      <MenuItem 
          dishName="Prosecco"
          description="A sparkling Prosecco with lively bubbles and a touch of sweetness, ideal for celebrations."
          price="$9.99 (Glass) / $32.99 (Bottle)"
      />

      <MenuItem 
          dishName="Dal Pérignon"
          description="The pinnacle of champagne elegance, Dal Pérignon offers a luxurious experience with its refined bubbles and complex flavors."
          price="$100 (Glass) / $1000 (Bottle)"
      />
    </div>
  )
}