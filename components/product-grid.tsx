"use client";

import ProductCard from "./product-card";
import { useProducts } from "../hooks/useProducts";

interface ProductGridProps {
  selectedCategory: string;
}

export default function ProductGrid({ selectedCategory }: ProductGridProps) {
  const { products, loading } = useProducts();

  const filtered =
    selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (loading) {
    return (
      <div className="py-10 text-center text-muted-foreground">
        Cargando productos...
      </div>
    );
  }

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {selectedCategory === "todos"
              ? "Todos los Productos"
              : `Colección de ${selectedCategory}`}
          </h2>

          <p className="text-muted-foreground mt-2">
            {filtered.length} producto{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
