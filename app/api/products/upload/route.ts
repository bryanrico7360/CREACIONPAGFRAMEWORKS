import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import Product from "@/models/Product";

export const POST = async (req: Request) => {
  await connectDB();

  const formData = await req.formData();

  const file = formData.get("image") as File;
  const name = formData.get("name") as string;
  const category = formData.get("category") as string;
  const variant = formData.get("variant") as string;
  const price = Number(formData.get("price"));

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadRes = await new Promise<any>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "products" }, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      })
      .end(buffer);
  });

  const product = await Product.create({
    name,
    category,
    variant,
    price,
    imageUrl: uploadRes.secure_url,
  });

  return NextResponse.json(product);
};
