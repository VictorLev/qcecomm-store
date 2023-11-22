"use client"

import { cn } from "@/lib/utils";
import { usePathname } from "@/src/navigation";

import { Category } from "@/type";
import Link from "next/link";


export const revalidate = 0;

interface MainNavProps {
    data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();
    const routes = data.map((route) => ({
        href:`en/category/${route.id}`,
        label: route.nameEn,
        active: pathname === `/category/${route.id}`
    }))
    
    return ( 
        <nav
            className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
            
            {routes.map((route) => (
                <Link 
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-blue-500",
                        route.active ? "text-white" : "text-blue-300"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
     );
}
 
export default MainNav;