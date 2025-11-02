"use client"

import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

// Interfaz que define cómo debe lucir un producto
interface Product {
  id: number
  name: string
  category: string
  variant: string
  price: number
  image: string
}

// Props que recibe el componente ProductCard (en este caso, un solo producto)
interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="bg-card rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
      
      {/* Imagen del producto */}
      <div className="relative bg-muted aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-100"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={product.id <= 4}
        />

        {/* Botón de agregar al carrito */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 right-3 p-3 rounded-full shadow-md transition-all ${
            isAdded
              ? "bg-accent text-accent-foreground scale-110"
              : "bg-primary text-primary-foreground hover:scale-110 hover:bg-opacity-90"
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      {/* Información del producto */}
      <div className="p-4 md:p-5">
        <h3 className="font-bold text-foreground text-sm md:text-base mb-1">{product.name}</h3>
        <p className="text-xs md:text-sm text-muted-foreground mb-3">{product.variant}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg md:text-xl font-bold text-primary">
            ${product.price.toLocaleString("es-CO")}
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            {isAdded ? "✓ Agregado" : "En stock"}
          </span>
        </div>
      </div>
    </div>
  )
}
