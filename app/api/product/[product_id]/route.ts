import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import {NextResponse} from "next/server";

interface EditPageProps {
    productId: string
}

export async function GET(params: EditPageProps) {
    await mongooseConnect();
    const {productId} = params

    const editedProduct = await Product.findOne({productId})

    return NextResponse.json(editedProduct)
}
