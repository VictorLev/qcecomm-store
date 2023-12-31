"use client"

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color } from "@/type";
import { useRouter, useSearchParams } from "next/navigation";

import qs from "query-string";

interface FilterColorProps {
    data: Color[];
    name: string;
    valueKey: string;
    enabled: boolean;
}

const FilterColor: React.FC<FilterColorProps> = ({
    data,
    name,
    valueKey,
    enabled
}) => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const selectedValue = searchParams.get(valueKey)

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString())
        const query = {
            ...current,
            [valueKey]: id
        };

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, {skipNull: true} )

        router.push(url)
    }
    if (enabled) {
        return ( 
            <div className="mb-8">
                <h3 className="text-lg font-semibold">
                    {name}
                </h3>
                <hr className="my-4"/>
                <div className="flex flex-wrap gap-2">
                    {data.map((filter) => (
                        <div key={filter.id} className="flex items-center">
                            <Button
                                className={cn(
                                    
                                    "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                                    selectedValue === filter.id && "bg-blue-950 text-white"
                                )} 
                                onClick={() => onClick(filter.id)}
                            >
                                <div className="h-6 w-6 rounded-full border border-gray-600" style={{backgroundColor: filter?.value}} />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
     else return 
}
 
export default FilterColor;