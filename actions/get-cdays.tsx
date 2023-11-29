import { Cday } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/cdays`

const getCdays = async ():Promise<Cday[]> => {
    const res = await fetch(URL);
    return res.json();
}

export default getCdays