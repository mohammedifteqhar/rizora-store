"use client";
import { createContext, useContext, useState } from "react";
import type { Product } from "./products";

type CartItem = { product: Product; qty: number };
type CartValue = { items: CartItem[]; addToCart: (p: Product) => void; total: number };

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
    setItems((prev) => {
      const found = prev.find((i) => i.product.id === product.id);
      if (found) {
        return prev.map((i) => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { product, qty: 1 }];
    });
  }

  const total = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  return <CartContext.Provider value={{ items, addToCart, total }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}