import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import {NextResponse} from "next/server";

export async function GET(req: Request) {
    await mongooseConnect();
    const allProducts = await Product.find()
    return NextResponse.json(allProducts)
}

export async function PUT(req: Request) {
    const body = await req.json();
    await mongooseConnect();
    const {title, description, price, _id} = body;
    const updateProduct = await Product.updateOne({_id}, {title, description, price})
    return NextResponse.json(updateProduct)
}
