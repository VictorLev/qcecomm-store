"use client"

import { ShoppingCart } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";


const NavBarActions = () => {
    const [isMounted,setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null
    }

    return ( 
        <div className="ml-auto  flex items-center gap-x-4">
            <Button className="flex items-center rounded-2xl bg-white px-4 py-2">
                <ShoppingCart
                    size={20}
                    color="blue"
                />
                <span className="ml-2 text-sm font-medium text-blue-800">
                    0
                </span>
            </Button>
        </div>
     );
}
 
export default NavBarActions;