"use client"

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Cday, Color, Province, Size, Sportsteam, Type } from "@/type";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";
import FilterColor from "./filterColor";
import { useTranslations } from "next-intl";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
  enSize:boolean;
  enColor:boolean;
  provinces:Province[];
  types:Type[];
  cdays:Cday[];
  sportsteams:Sportsteam[]
  enProv:boolean;
  enType:boolean;
  enCday:boolean;
  enSpor:boolean;
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  colors,
  enSize,
  enColor,
  provinces,
  types,
  cdays,
  sportsteams,
  enProv,
  enType,
  enCday,
  enSpor,
}) => {
  const t = useTranslations('Filter');
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }



  return (
  <>
    <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
      Filters
      <Plus size={20}/>
    </Button>
    <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
      <div className="fixed z-40 inset-0 bg-black bg-opacity-25" />
      <div className="fixed z-40 inset-0 flex">
        <Dialog.Panel className="relative text-white ml-auto my-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-blue-800 pb-6 shadow-xl">
          <div className="flex items-center justify-end p-4">
            <IconButton className="text-blue-800" icon={<X size={15}/>} onClick={onClose}/>
          </div>
          <div className="p-4">
          <Filter
              valueKey="sizeId"
              name={t('Size')}
              data={sizes}
              enabled={enSize}
          />
          <FilterColor
              valueKey="colorId"
              name={t('Color')}
              data={colors}
              enabled={enColor}
          />
          <Filter
              valueKey="provinceId"
              name={t('Province')}
              data={provinces}
              enabled={enProv}
          />
          <Filter
              valueKey="typeId"
              name={t('Type')}
              data={types}
              enabled={enType}
          />
          <Filter
              valueKey="cdayId"
              name={t('Cday')}
              data={cdays}
              enabled={enCday}
          />
          <Filter
              valueKey="sportsteamId"
              name={t('Sportsteam')}
              data={sportsteams}
              enabled={enSpor}
          />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  </>
      );
}

export default MobileFilters;
