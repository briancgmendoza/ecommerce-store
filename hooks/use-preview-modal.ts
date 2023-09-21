import { create } from "zustand";

import { IProduct } from "@/types";
import { IModal } from "./interface";

const usePreviewModal = create<IModal>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: IProduct) => set({ data, isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default usePreviewModal;