import { Sportsteam } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sportsteams`

const getSportsteams = async ():Promise<Sportsteam[]> => {
    const res = await fetch(URL);
    return res.json();
}

export default getSportsteams