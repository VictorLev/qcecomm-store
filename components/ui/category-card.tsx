"use client"

import { Billboard, Category, Product } from "@/type";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { Link, useRouter } from "@/src/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-carts";
import { useLocale } from "next-intl";

interface CategoryCard {
    data: Category;
    billboard: Billboard
}

const CategoryCard: React.FC<CategoryCard> = ({
    data,
    billboard
}) => {
    const route = `/category/${data?.id}`
    const locale = useLocale();
    const name = 'name'.concat(locale.charAt(0).toUpperCase()+locale[1]);

    return (
        <Link href={route} className="bg-white cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square relative opacity-60 hover:opacity-90 object-cover rounded-md bg-cover bg-center"
                style={{backgroundImage:`url(${billboard.images[0].url})`}}
                >
                <div className="z-10 flex justify-center ">
                  <div className=" font-semibold text-2xl text-black bg-[#f3f7ff] rounded mt-2 p-1">
                    {data.nameEn}  {/* To Translate */}
                  </div>
                </div>
            </div>

        </Link>
    );
}

export default CategoryCard;
