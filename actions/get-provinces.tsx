import { Province } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/provinces`

const getProvinces = async ():Promise<Province[]> => {
    const res = await fetch(URL);
    return res.json();
}

export default getProvinces