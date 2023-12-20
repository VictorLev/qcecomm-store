"use client"

import { Billboard as BillboardType } from "@/type";
import IconButton from "./ui/icon-button";
import { MouseEventHandler, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";



interface BillboardProps {
    data: BillboardType
};

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {


    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, data?.images.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    setInterval(() => paginate(1),3000)

    return (
        <div className="group cursor-pointer pb-4 rounded-none ">
          <div
            className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            style={{backgroundImage:`url(${data.images[imageIndex]})`}}
          >
          </div>
        </div>

     );
}

export default Billboard;
