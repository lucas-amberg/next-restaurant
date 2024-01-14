import MenuItem from "./MenuItem"

//This shows all of the Nigiri items on the menu
export default function Nigiri() {
  return(
    <div className="p-6 flex items-center justify-center flex-row flex-wrap">
      <MenuItem 
          dishName="Maguro (Tuna)"
          description="Fresh slices of premium tuna atop bite-sized beds of seasoned rice. A classic nigiri choice."
          price="$3.99"
      />

      <MenuItem 
          dishName="Sake (Salmon)"
          description="Delicate salmon slices perched on seasoned rice. A melt-in-your-mouth delight with a hint of richness."
          price="$4.29"
      />

      <MenuItem 
          dishName="Ebi (Shrimp)"
          description="Plump shrimp resting on seasoned rice. Simple yet satisfying, with a delightful texture and mild sweetness."
          price="$3.49"
      />

      <MenuItem 
          dishName="Hamachi (Yellowtail)"
          description="Buttery yellowtail slices over seasoned rice. A flavorful choice with a perfect balance of richness and freshness."
          price="$4.99"
      />

      <MenuItem 
          dishName="Ikura (Salmon Roe)"
          description="Glistening salmon roe atop rice, bursting with oceanic flavor. A unique and indulgent nigiri option."
          price="$5.99"
      />

      <MenuItem 
          dishName="Uni (Sea Urchin)"
          description="Creamy sea urchin on a bed of seasoned rice. A delicacy prized for its unique, briny taste."
          price="$7.99"
      />

      <MenuItem 
          dishName="Tamago (Sweet Egg)"
          description="Layered sweet egg omelet on a block of seasoned rice. A comforting and slightly sweet nigiri option."
          price="$2.99"
      />

      <MenuItem 
          dishName="Toro (Fatty Tuna)"
          description="Rich and succulent fatty tuna slices over seasoned rice. A luxurious indulgence for sushi enthusiasts."
          price="$8.99"
      />

      <MenuItem 
          dishName="Hotate (Scallop)"
          description="Tender scallop slices atop seasoned rice. Delicately sweet with a buttery texture."
          price="$4.79"
      />

      <MenuItem 
          dishName="Amaebi (Sweet Shrimp)"
          description="Sweet shrimp, raw or lightly seared, on a bed of seasoned rice. Exquisite sweetness and freshness."
          price="$6.99"
      />

      <MenuItem 
          dishName="Kani (Crab)"
          description="Flaky crab meat on seasoned rice. A light and refreshing nigiri option with a hint of sweetness."
          price="$5.49"
      />

      <MenuItem 
          dishName="Anago (Sea Eel)"
          description="Grilled sea eel on seasoned rice. A savory and slightly sweet nigiri choice with a tender texture."
          price="$6.49"
      />

      <MenuItem 
          dishName="Tako (Octopus)"
          description="Tender octopus slices on seasoned rice. A chewy yet succulent option, offering a delightful texture."
          price="$4.59"
      />

      <MenuItem 
          dishName="Ika (Squid)"
          description="Sliced squid on a bed of seasoned rice. A mildly sweet and chewy nigiri option with a clean taste."
          price="$3.79"
      />

      <MenuItem 
          dishName="Inari (Sweet Tofu Skin)"
          description="Seasoned rice encased in sweet tofu skin. A vegetarian nigiri option with a delightful contrast of flavors."
          price="$2.49"
      />

      <MenuItem 
          dishName="Hokkigai (Surf Clam)"
          description="Clean and briny surf clam slices on seasoned rice. A refreshing and slightly chewy nigiri choice."
          price="$4.39"
      />

      <MenuItem 
          dishName="Masago (Capelin Roe)"
          description="Capelin roe on seasoned rice. A small but flavorful nigiri option with a burst of briny goodness."
          price="$3.29"
      />

      <MenuItem 
          dishName="Tai (Red Snapper)"
          description="Fresh red snapper slices on seasoned rice. A mild and delicate nigiri choice with a clean finish."
          price="$4.09"
      />

      <MenuItem 
          dishName="Unagi (Freshwater Eel)"
          description="Grilled freshwater eel on seasoned rice. A sweet and savory nigiri option with a luscious glaze."
          price="$6.79"
      />

      <MenuItem 
          dishName="Saba (Mackerel)"
          description="Mackerel slices on seasoned rice. A bold and flavorful nigiri choice with a distinct, slightly oily taste."
          price="$3.89"
      />

    </div>
  )
}