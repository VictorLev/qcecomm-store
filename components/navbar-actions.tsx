"use client"

import { ShoppingBag, ShoppingCart } from "lucide-react";
import Button from "./ui/button";


const NavBarActions = () => {
    return ( 
        <div className="ml-auto  flex items-center gap-x-4">
            <Button className="flex items-center rounded-2xl bg-white px-4 py-2">
                <ShoppingCart
                    size={20}
                    color="blue"
                />

            </Button>
        </div>
     );
}
 
export default NavBarActions;