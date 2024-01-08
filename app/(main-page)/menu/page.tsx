
import { Metadata } from "next";

import SubHeader from "@/app/ui/layout/SubHeader";
import MenuHeader from "@/app/ui/layout/menu-components/MenuHeader";
import Starters from "@/app/ui/layout/menu-components/Starters";
import Nigiri from "@/app/ui/layout/menu-components/Nigiri";
import StandardRolls from "@/app/ui/layout/menu-components/StandardRolls";
import SpecialtyRolls from "@/app/ui/layout/menu-components/SpecialtyRolls";
import DalRolls from "@/app/ui/layout/menu-components/DalRolls";
import Drinks from "@/app/ui/layout/menu-components/Drinks";
import Beer from "@/app/ui/layout/menu-components/Beer";
import Wine from "@/app/ui/layout/menu-components/Wine";
import Cocktails from "@/app/ui/layout/menu-components/Cocktails";
import Sides from "@/app/ui/layout/menu-components/Sides";
import Desserts from "@/app/ui/layout/menu-components/Desserts";

export const metadata: Metadata = {
  title: 'Menu'
}

export default function Menu() {
  return(
    <div>
      <SubHeader text="Menu" className="menu-header" position='start'/>
      <MenuHeader title='Starters'/>
      <Starters/>
      <MenuHeader title='Nigiri'/>
      <Nigiri/>
      <MenuHeader title='Standard Rolls'/>
      <StandardRolls/>
      <MenuHeader title="Specialty Rolls"/>
      <SpecialtyRolls/>
      <MenuHeader title="DAL ROLLS"/>
      <DalRolls/>
      <MenuHeader title="Sides"/>
      <Sides/>
      <MenuHeader title="Desserts"/>
      <Desserts/>
      <MenuHeader title="Non Alcoholic Beverages"/>
      <Drinks/>
      <MenuHeader title="Beer Selection"/>
      <Beer/>
      <MenuHeader title="Wine List"/>
      <Wine/>
      <MenuHeader title="Cocktails"/>
      <Cocktails/>
      <div className="p-10 text-center">
        Consuming raw or uncooked meats, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions. 
      </div>
    </div>
  )
}