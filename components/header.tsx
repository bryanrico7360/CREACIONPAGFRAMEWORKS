"use client" // Se ejecuta del lado del cliente (usa useState, por eso es necesario)

import { ShoppingCart, Menu } from "lucide-react" // Íconos de carrito y menú hamburguesa
import { useState } from "react"

export default function Header() {
  // Estado para manejar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // Encabezado principal del sitio
    <header className="border-b border-border bg-background">
      {/* Contenedor centrado y con márgenes responsivos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fila principal del header */}
        <div className="flex items-center justify-between h-16">
          
          {/* --- LOGO --- */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">ESSENTIALS</span>
          </div>

          {/* --- NAVEGACIÓN DE ESCRITORIO --- */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition">
              Hombres
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition">
              Mujeres
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition">
              Accesorios
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition">
              Blog
            </a>
          </nav>

          {/* --- LADO DERECHO (Carrito + Botón menú móvil) --- */}
          <div className="flex items-center gap-4">
            
            {/* Botón de carrito (solo visible en pantallas medianas o mayores) */}
            <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition">
              <span>Carrito</span>
              <ShoppingCart className="w-5 h-5" />
            </button>

            {/* Botón del menú para móviles */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna entre mostrar/ocultar el menú
              className="md:hidden p-2 text-foreground"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* --- NAVEGACIÓN MÓVIL --- */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition py-2">
              Hombres
            </a>
            <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition py-2">
              Mujeres
            </a>
            <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition py-2">
              Accesorios
            </a>
            <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition py-2">
              Blog
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
