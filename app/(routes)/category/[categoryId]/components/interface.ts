import { IColor, ISize } from "@/types";

export interface IFilterProps {
    valueKey: string;
    name: string;
    data: (ISize | IColor)[];
}

export interface IMobileFiltersProps {
    sizes: ISize[];
    colors: IColor[];
}