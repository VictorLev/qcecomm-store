"use client"

import { Billboard as BillboardType } from "@/type";
import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";



interface BillboardProps {
    data: BillboardType
};

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {

    const [index, set] = useState(1)
    const transitions = useTransition(index, {
      key: index,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: 1000 },
      onRest: (_a, _b, item) => {
        if (index === item) {
          set(state => (state + 1) % data.images.length)
        }
      },
      exitBeforeEnter: false,
      delay: 3000
    })
    return (
      <div className="h-[25rem] mb-8">

            <div className="absolute m-4 shadow-inner shadow-gray-600 w-11/12 h-[25rem] bg-cover bg-center rounded"
             style={{backgroundImage: `url(${data.images[0].url})`}}>
            </div>
            {data.images.length > 1 && transitions((style, i) => (
              <animated.div
                className="absolute m-4 rounded shadow-inner shadow-gray-600 w-11/12 h-[25rem] bg-cover bg-center will-change-[opacity]"
                style={{
                  ...style,
                  backgroundImage: `url(${data.images[i].url})`,
                }}
              >
              </animated.div>
            ))}
      </div>
     );
}

export default Billboard;
