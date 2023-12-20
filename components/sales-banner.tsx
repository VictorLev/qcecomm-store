"use client"

import  {useTranslations } from 'next-intl';
import Button from "./ui/button";
import { useRouter } from 'next/navigation';
import Container from './ui/container';
import IconButton from './ui/icon-button';
import { X } from 'lucide-react';
import { useState } from 'react';

const SalesBanner = () => {
    const t = useTranslations('Index');
    const router = useRouter()
    const [visible, setVisible] = useState(true);

    const onRemove  = () => {
      setVisible((prev) => !prev);
    }
    return (
      <>
      {visible && (
        <div className="z-20 sticky top-0 bottom-0 mx-auto bg-yellow-500">

          <Container>
              <div className="px-6 sm:px-6 lg:px-8 flex flex-row gap-x-4 h-16 sm:h-10 justify-center items-center">

                <div className="font-bold">
                  BIG SALE! 40% OFF on all selected products
                </div>

                <Button onClick={() => router.push('/')} className="flex item bg-white	 text-yellow-500
                  rounded-sm
                  p-1">
                  Click for Details
                </Button>

                <div className="absolute z-10 right-1 top-1">
                    <button
                      className=""
                      onClick={onRemove}
                    >
                      <X size={22} />
                    </button>
                </div>
              </div>
            </Container>

        </div>
        )}
      </>
    );
}


export default SalesBanner;
