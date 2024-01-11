"use client"

import { Dialog } from "@headlessui/react";
import { X, Menu } from 'lucide-react';
import { useState } from "react";
import { Link, usePathname } from "@/src/navigation";
import { Category } from "@/type";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import NavBarActions from "./navbar-actions";
import IconButton from "./ui/icon-button";

export const revalidate = 0;

interface MobileNavProps {
    data: Category[]
}


const MobileNavBar: React.FC<MobileNavProps> = ({data}) => {
  const pathname = usePathname();

  const locale = useLocale();
  const name = 'name'.concat(locale.charAt(0).toUpperCase()+locale[1]);
  const routes = data.map((route) => (
      {
      href:`/category/${route.id}`,
      label: route[name as keyof Category].toString(),
      active: pathname === `/category/${route.id}`
  }))

  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }


  return (
  <>
    <button onClick={onOpen} className="text-white lg:hidden p-2 ml-auto">
      <Menu size={30}/>
    </button>
    <Dialog open={open} as="div" className="fixed z-40 lg:hidden" onClose={onClose}>
      <div className="fixed z-40 inset-0 bg-black bg-opacity-25" />
      <div className="fixed z-40 inset-0 flex">
        <Dialog.Panel className="relative text-white ml-auto my-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-blue-800 pb-6 shadow-xl">
          <div className="flex items-center justify-end p-4">
          <IconButton className="text-blue-800" icon={<X size={15}/>} onClick={onClose}/>
          </div>
          <div className="p-4">
            <nav className="navContainerRef">
              <div className="flex flex-col items-center cursor-pointer gap-8">
              {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    onClick={onClose}
                    className={cn(
                        "font-semibold transition-colors hover:text-blue-500 text-lg",
                        route.active ? "text-white" : "text-blue-300"
                    )}
                >
                        {route.label}
                        {/*<span className="lg-view">{route.label}</span>
                        <span className="sm-view">{route.label.slice(0, 2)}</span>*/}
                </Link>
            ))}
                <NavBarActions />
                </div>
              </nav>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  </>
  );
}
export default MobileNavBar;
