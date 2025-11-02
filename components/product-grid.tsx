"use client"

// Importamos el componente de tarjeta individual del producto
import ProductCard from "./product-card"

// Definimos la interfaz que especifica las props que recibirá el componente
interface ProductGridProps {
  selectedCategory: string
}

// Lista de productos disponibles (se podría conectar a una base de datos o API más adelante)
const allProducts = [
  {
    id: 1,
    name: "Camiseta Essentials Azul",
    category: "hombres",
    variant: "Azul",
    price: 42000,
    image: "/shirtblue.jpg",
  },
  {
    id: 2,
    name: "Camiseta Essentials Blanca",
    category: "hombres",
    variant: "Blanco",
    price: 48000,
    image: "/shirtwhite.jpg",
  },
  {
    id: 3,
    name: "Camiseta Essentials Negra",
    category: "mujeres",
    variant: "Negro",
    price: 50000,
    image: "/shirtblackwomen.jpg",
  },
  {
    id: 4,
    name: "Camiseta Essentials Gris",
    category: "hombres",
    variant: "Gris",
    price: 40000,
    image: "/shirtgray.jpg",
  },
  {
    id: 5,
    name: "Camiseta Essentials Blanca",
    category: "mujeres",
    variant: "Blanco",
    price: 76000,
    image: "/shirtwhitewomen.jpg",
  },
  {
    id: 6,
    name: "Chaqueta Essentials Negra",
    category: "mujeres",
    variant: "Negro",
    price: 145000,
    image: "/jacket.webp",
  },
  {
    id: 7,
    name: "Camiseta Essentials Terracota",
    category: "mujeres",
    variant: "Crema",
    price: 45000,
    image: "/shirtterracota.jpg",
  },
  {
    id: 8,
    name: "Gorro negro Essentials Básico",
    category: "accesorios",
    variant: "Negro",
    price: 35000,
    image: "/hatblack.jpg",
  },
]

// Componente principal que muestra los productos según la categoría seleccionada
export default function ProductGrid({ selectedCategory }: ProductGridProps) {
  // Filtramos los productos según la categoría seleccionada
  // Si la categoría es "todos", se muestran todos los productos
  const filteredProducts =
    selectedCategory === "todos"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory)

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Título de la sección --- */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {selectedCategory === "todos"
              ? "Todos los Productos"
              : `Colección de ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
          </h2>

          {/* Mostramos el número total de productos */}
          <p className="text-muted-foreground mt-2">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* --- Grid (rejilla) de productos --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* --- Mensaje si no hay productos --- */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No hay productos en esta categoría</p>
          </div>
        )}
      </div>
    </section>
  )
}
