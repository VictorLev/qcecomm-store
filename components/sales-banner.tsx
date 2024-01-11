"use client"

import  {useTranslations } from 'next-intl';
import Button from "./ui/button";
import { Link, useRouter } from "@/src/navigation";
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
              <div className="text-xs sm:text-sm lg:text-base px-6 sm:px-6 lg:px-8 flex flex-row gap-x-4 h-auto justify-center items-center">

                <div className="font-bold">
                  {t("sales-banner")}
                </div>

                <Button onClick={() => router.push('/category/14611642-a1ff-4c2a-9634-9d2e42641efa?typeId=80ee52e7-480c-4b08-ad42-eba10e770af7')}
                className="flex item bg-white	 text-yellow-500
                  rounded-sm
                  p-1
                  my-1
                  ">
                  {t("sales-button")}
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
