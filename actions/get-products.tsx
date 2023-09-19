import qs from "query-string";

import { IProduct } from "@/types";
import { IGetProductsQuery } from "./interface";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: IGetProductsQuery): Promise<IProduct[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    });

    const res = await fetch(url);

    return res.json();
};

export default getProducts;