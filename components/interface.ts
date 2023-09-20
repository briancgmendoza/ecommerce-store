import { IBillboard, ICategory, IProduct } from "@/types";

export interface IMainNavProps {
    data: ICategory[];
}

export interface IBillboardProps {
    data: IBillboard;
}

export interface IProductListProps {
    title: string;
    items: IProduct[];
}

export interface IInfoProps {
    data: IProduct;
}