"use client";

import { useEffect, useState } from "react";

export interface Product {
  id: string;
  name: string;
  category: string;
  variant: string;
  price: number;
  image: string;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        // NORMALIZACIÓN
        const normalized = data.map((p: any) => ({
          id: p._id,
          name: p.name,
          category: p.category,
          variant: p.variant,
          price: p.price,
          image: p.imageUrl,
        }));

        setProducts(normalized);
      } catch (err) {
        console.error("Error cargando productos:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { products, loading };
}
