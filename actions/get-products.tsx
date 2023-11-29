import { Product } from "@/type";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    typeId?: string;
    provinceId?: string;
    cdayId?: string;
    sportsteamId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({ 
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            typeId: query.typeId,
            provinceId: query.provinceId,
            cdayId: query.cdayId,
            sportsteamId: query.sportsteamId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
      })
    
    const res = await fetch(url);
    return res.json();
}

export default getProducts