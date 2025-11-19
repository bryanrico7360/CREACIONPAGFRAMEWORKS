"use client";

import { useState } from "react";

export default function CreateProductPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImage = (file: File) => {
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (imageFile) formData.set("image", imageFile);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error al subir");

      setMsg("Producto creado correctamente ✔");
      form.reset();
      setPreview(null);
      setImageFile(null);

    } catch (err: any) {
      setMsg("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Crear Producto</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* NOMBRE */}
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="border p-2 w-full rounded"
        />

        {/* CATEGORÍA */}
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          required
          className="border p-2 w-full rounded"
        />

        {/* VARIANTE */}
        <input
          type="text"
          name="variant"
          placeholder="Variante"
          required
          className="border p-2 w-full rounded"
        />

        {/* PRECIO */}
        <input
          type="number"
          name="price"
          placeholder="Precio"
          required
          className="border p-2 w-full rounded"
        />

        {/* --- INPUT DE IMAGEN (DRAG & DROP + PREVIEW) --- */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragActive(false);
            if (e.dataTransfer.files[0]) handleImage(e.dataTransfer.files[0]);
          }}
          className={`border-2 rounded p-6 text-center cursor-pointer transition 
            ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
          onClick={() => document.getElementById("imageInput")?.click()}
        >
          {!preview ? (
            <p className="text-gray-600">
              Arrastra una imagen aquí o <span className="text-blue-600 underline">selecciona</span>
            </p>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <img
                src={preview}
                alt="Preview"
                className="max-h-40 object-contain rounded"
              />
              <button
                type="button"
                onClick={() => {
                  setPreview(null);
                  setImageFile(null);
                }}
                className="text-red-600 underline text-sm"
              >
                Quitar imagen
              </button>
            </div>
          )}
        </div>

        <input
          id="imageInput"
          type="file"
          name="image"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) handleImage(e.target.files[0]);
          }}
        />

        {/* BOTÓN */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          {loading ? "Subiendo..." : "Crear Producto"}
        </button>

      </form>

      {msg && <p className="mt-4">{msg}</p>}
    </div>
  );
}
