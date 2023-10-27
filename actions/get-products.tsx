import { Product } from "@/type";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProducts = async ():Promise<Product[]> => {
    const url = qs.stringifyUrl({
        
    })
    
    onst res = await fetch(URL);
    return res.json();
}

export default getProducts