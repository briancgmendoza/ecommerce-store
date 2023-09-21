import { IProduct } from "@/types";

export interface IPreviewModal {
    isOpen: boolean;
    data?: IProduct;
    onOpen: (data: IProduct) => void;
    onClose: () => void;
}

export interface ICartModal {
    items: IProduct[];
    addItem: (data: IProduct) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}