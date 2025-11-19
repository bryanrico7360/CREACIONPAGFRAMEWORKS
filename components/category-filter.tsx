"use client"

import { useEffect, useState } from "react"

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/categories")
      const data = await res.json()
      setCategories(data)
    }
    load()
  }, [])

  return (
    <section className="border-b border-border bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">

          {/* Botón de TODOS */}
          <button
            onClick={() => onCategoryChange("todos")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              selectedCategory === "todos"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-secondary"
            }`}
          >
            ✨ Todos
          </button>

          {/* Botones dinámicos */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
