export default function Hero() {
  return (
    // Sección principal del "hero" (bloque destacado al inicio)
    <section className="relative bg-secondary py-12 md:py-20">
      {/* Contenedor centrado y con márgenes responsivos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid principal: en móviles una sola columna, en escritorio dos (texto + imagen) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* --- Columna de texto --- */}
          <div className="flex flex-col justify-center">
            {/* Título principal del hero */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Colección de Essentials
            </h1>

            {/* Descripción o texto secundario */}
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Descubre nuestra selección de prendas básicas de alta calidad. Diseño minimalista y comodidad premium.
            </p>

            {/* Botón de acción principal */}
            <button className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition w-fit">
              Explorar Colección
            </button>
          </div>

          {/* --- Columna de imagen --- */}
          <div className="bg-muted rounded-lg h-80 md:h-96 flex items-center justify-center">
            {/* Imagen destacada del hero */}
            <img
              src="/clothes.jpg"
              alt="Colección de Esenciales"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
