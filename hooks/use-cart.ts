import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

import { ICartModal } from "./interface";
import { IProduct } from "@/types";

const useCart = create(
    persist<ICartModal>((set, get) => ({
        items: [],
        addItem: (data: IProduct) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if (existingItem) {
                return toast("Item already in cart.");
            }

            set({ items: [...get().items, data] });
            toast.success("Item added to cart.");
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
        },
        removeAll: () => set({ items: [] })
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
);

export default useCart;