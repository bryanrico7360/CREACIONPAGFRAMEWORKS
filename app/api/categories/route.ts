import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  try {
    await connectDB();

    const categories = await Product.distinct("category");

    return NextResponse.json(categories);
  } catch (err) {
    console.error("Error cargando categorías:", err);
    return NextResponse.json([], { status: 500 });
  }
}
