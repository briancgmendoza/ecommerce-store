import { IProduct } from "@/types";

export interface IModal {
    isOpen: boolean;
    data?: IProduct;
    onOpen: (data: IProduct) => void;
    onClose: () => void;
}