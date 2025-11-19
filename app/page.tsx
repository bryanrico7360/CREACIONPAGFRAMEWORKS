"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import CategoryFilter from "@/components/category-filter"
import ProductGrid from "../components/product-grid"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <ProductGrid selectedCategory={selectedCategory} />
    </main>
  )
}

