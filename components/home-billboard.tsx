"use client"

import { Billboard as BillboardType } from "@/type";
import { useEffect , useState } from "react";
import { wrap } from "popmotion";
import { useTransition, animated } from '@react-spring/web'



interface BillboardProps {
    data: BillboardType
};

const HomeBillboard: React.FC<BillboardProps> = ({
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
      <div className="pb-8 h-[30rem] mb-4">
            <div className="absolute w-full h-[30rem] bg-cover bg-center"
             style={{backgroundImage: `url(${data.images[0].url})`}}>

            </div>
            {transitions((style, i) => (
              <animated.div
                className="absolute w-full h-[30rem] bg-cover bg-center will-change-[opacity]"
                style={{
                  ...style,
                  backgroundImage: `url(${data.images[i].url})`,
                }}
              >
                <div>
                  hello there
                </div>
              </animated.div>
            ))}

      </div>

    );
}

export default HomeBillboard;
