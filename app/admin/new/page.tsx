"use client";

import { useState } from "react";

export default function NewProductForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [variant, setVariant] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      alert("Debes subir una imagen");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("variant", variant);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Error: " + data.error);
      } else {
        alert("Producto creado correctamente");
      }
    } catch (err) {
      console.error(err);
      alert("Error al crear el producto");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-card rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Crear nuevo producto</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Nombre del producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Categoría (ej: camisas)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Variante (ej: azul, M)"
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* Imagen */}
        <div>
          <label className="block mb-1 font-medium">Imagen</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>

        <button
          disabled={loading}
          className="w-full mt-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          {loading ? "Creando..." : "Crear producto"}
        </button>
      </form>
    </div>
  );
}
