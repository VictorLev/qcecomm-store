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
    
    const variants = {
        enter: (direction: number) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: (direction: number) => {
          return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
          };
        }
    };

    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, data?.images.length, page);
    
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };
    

    return ( 
        <div className="group cursor-pointer p-4 sm:p-6 lg:p-8 rounded ">

                <AnimatePresence
                    initial={false}
                    custom={direction}
                    mode="wait"
                >
                    <motion.div
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className=" rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover" 
                        style={{ backgroundImage: `url(${data?.images[imageIndex].url})`}}
                        key={imageIndex}
                        custom={direction}
                    >
                        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 inset-y-1/2">
                            <div className="flex gap-x-4 justify-between">
                                <IconButton 
                                    onClick={() => paginate(1)}
                                    icon={<ChevronLeft size={20} className="text-gray-600" />}
                                />
                                <IconButton 
                                    onClick={() => paginate(-1)}
                                    icon={<ChevronRight size={20} className="text-gray-600" />}
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

     );
}
 
export default Billboard;