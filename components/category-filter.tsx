"use client" // Este componente se ejecuta del lado del cliente (usa eventos y props interactivas)

interface CategoryFilterProps {
  // Categoría actualmente seleccionada (viene desde el componente padre)
  selectedCategory: string
  // Función que se llama cuando el usuario selecciona una categoría nueva
  onCategoryChange: (category: string) => void
}

// Lista de categorías disponibles
const categories = [
  { id: "todos", label: "Todos", icon: "✨" },
  { id: "hombres", label: "Hombres", icon: "👔" },
  { id: "mujeres", label: "Mujeres", icon: "👗" },
  { id: "accesorios", label: "Accesorios", icon: "👜" },
]

// Componente principal del filtro de categorías
export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    // Sección que contiene todo el filtro (borde inferior + color de fondo)
    <section className="border-b border-border bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contenedor con los botones alineados al centro, que se adaptan al ancho (flex-wrap) */}
        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          
          {/* Recorre cada categoría y crea un botón */}
          {categories.map((category) => (
            <button
              key={category.id} // Clave única para React
              onClick={() => onCategoryChange(category.id)} // Llama a la función del padre
              className={`
                px-6 py-2 rounded-full font-medium text-sm md:text-base transition
                ${
                  // Si esta categoría es la seleccionada → cambia colores
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-secondary"
                }
              `}
            >
              {/* Icono antes del texto */}
              <span className="mr-2">{category.icon}</span>
              {/* Nombre visible de la categoría */}
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
