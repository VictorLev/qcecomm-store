import { Type } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/types`

const getTypes = async ():Promise<Type[]> => {
    const res = await fetch(URL);
    return res.json();
}

export default getTypes