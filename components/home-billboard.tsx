"use client"

import { Billboard as BillboardType } from "@/type";
import { useEffect , useState } from "react";
import { wrap } from "popmotion";
import { useTransition, animated } from '@react-spring/web'
import { useTranslations } from "next-intl";



interface BillboardProps {
    data: BillboardType
};

const HomeBillboard: React.FC<BillboardProps> = ({
    data
}) => {
    const t = useTranslations('Index');
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

            <div className="shadow-inner shadow-gray-600 absolute w-full h-[25rem] bg-cover bg-center"
             style={{backgroundImage: `url(${data.images[0].url})`}}>
            </div>
            {transitions((style, i) => (
              <animated.div
                className="shadow-inner shadow-gray-600 absolute w-full h-[25rem] bg-cover bg-center will-change-[opacity]"
                style={{
                  ...style,
                  backgroundImage: `url(${data.images[i].url})`,
                }}
              >

              </animated.div>
            ))}
            <div className="absolute z-100 h-[25rem] w-full flex flex-col justify-center items-center gap-y-8">
                <div className="border font-bold text-xl sm:text-2xl lg:text-4xl sm:max-w-5xl max-w-sm bg-[#f3f7ff] rounded p-4">
                  {t('billboard')}
                </div>
              </div>


      </div>

    );
}

export default HomeBillboard;
