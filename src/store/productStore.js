import { create } from "zustand";
import { products } from "../data/produits";

const useProductStore = create((set) => ({
  items: products,
  addProduct: (product) =>
    set((state) => ({ items: [...state.items, product] })),
  removeProduct: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  editProduct: (id, newData) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...newData } : item
      ),
    })),
}));

export default useProductStore;
