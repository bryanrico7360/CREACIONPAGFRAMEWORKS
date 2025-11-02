"use client" // Indica que este componente se ejecuta del lado del cliente (usa hooks como useState)

import { ShoppingCart } from "lucide-react" // Ícono del carrito (de la librería lucide-react)
import { useState } from "react"

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
  // Estado para mostrar temporalmente si el producto fue agregado al carrito
  const [isAdded, setIsAdded] = useState(false)

  // Función que se ejecuta al hacer clic en el botón del carrito
  const handleAddToCart = () => {
    setIsAdded(true) // Marca el producto como agregado
    // Luego de 2 segundos, vuelve al estado original
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    // Tarjeta principal del producto
    <div className="bg-card rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
      
      {/* Imagen del producto */}
      <div className="relative bg-muted h-64 md:h-72 overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"} // Si no hay imagen, usa una de respaldo
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Botón de agregar al carrito */}
        <button
          onClick={handleAddToCart}
          className={`
            absolute bottom-4 right-4 p-3 rounded-full transition-all
            ${
              isAdded
                ? "bg-accent text-accent-foreground" // Cambia color cuando el producto se agrega
                : "bg-primary text-primary-foreground hover:bg-opacity-90"
            }
          `}
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      {/* Información del producto */}
      <div className="p-4 md:p-5">
        <h3 className="font-bold text-foreground text-sm md:text-base mb-1">{product.name}</h3>
        <p className="text-xs md:text-sm text-muted-foreground mb-3">{product.variant}</p>

        {/* Precio y estado */}
        <div className="flex items-center justify-between">
          {/* Precio con formato de moneda local (colombiana) */}
          <span className="text-lg md:text-xl font-bold text-primary">
            ${product.price.toLocaleString("es-CO")}
          </span>
          {/* Estado: muestra "✓ Agregado" por 2 segundos al hacer clic */}
          <span className="text-xs font-medium text-muted-foreground">
            {isAdded ? "✓ Agregado" : "En stock"}
          </span>
        </div>
      </div>
    </div>
  )
}
