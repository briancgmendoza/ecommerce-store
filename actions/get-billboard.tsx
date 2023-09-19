import { IBillboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (id: string): Promise<IBillboard> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
};

export default getBillboards;