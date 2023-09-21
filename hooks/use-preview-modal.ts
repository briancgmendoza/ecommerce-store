import { create } from "zustand";

import { IProduct } from "@/types";
import { IPreviewModal } from "./interface";

const usePreviewModal = create<IPreviewModal>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: IProduct) => set({ data, isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default usePreviewModal;