"use client"

import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/src/navigation";

import { Category } from "@/type";
import { useLocale } from "next-intl";



export const revalidate = 0;

interface MainNavProps {
    data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    const locale = useLocale();
    const name = 'name'.concat(locale.charAt(0).toUpperCase()+locale[1]);
    const routes = data.map((route) => (
        {
        href:`/category/${route.id}`,
        label: route[name as keyof Category].toString(),
        active: pathname === `/category/${route.id}`
    }))


    return (
        <nav
            className="mx-6 flex-wrap items-center space-x-1 lg:space-x-6 sm:flex-wrap sm:space-x-4"
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-xs font-semibold transition-colors hover:text-blue-500 sm:text-sm",
                        route.active ? "text-white" : "text-blue-300"
                    )}
                >
                        {route.label}
                        {/*<span className="lg-view">{route.label}</span>
                        <span className="sm-view">{route.label.slice(0, 2)}</span>*/}
                </Link>
            ))}
        </nav>
     );
}

export default MainNav;
