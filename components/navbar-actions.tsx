"use client"

import { Globe, ShoppingCart } from "lucide-react";
import { GB, FR, ES} from 'country-flag-icons/react/3x2'
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-carts";
import { Link, useRouter } from "@/src/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";


const NavBarActions = () => {
    const [isMounted,setIsMounted] = useState(false)

    const router = useRouter()
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const cart = useCart();

    if(!isMounted) {
        return null
    }

    return ( 
        <div className="ml-auto  flex items-center gap-x-4">
            <Button onClick={() => router.push('/cart')} className="flex items-center rounded-2xl bg-white px-4 py-2">
                <ShoppingCart
                    size={20}
                    color="blue"
                />
                <span className="ml-2 text-sm font-medium text-blue-800">
                    {cart.items.length}
                </span>
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="h-8 w-8 p-0">
                    <Globe className="h-4 w-8"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem >
                    <GB className="mr-2 h-4 w-4"/>
                    <Link href='/' locale="en"> 
                        English
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem >
                    <FR className="mr-2 h-4 w-4"/>
                    <Link href='/' locale="fr"> 
                        Français
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <ES className="mr-2 h-4 w-4"/>
                    <Link href='/' locale="sp"> 
                        Español
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        </div>
     );
}
 
export default NavBarActions;