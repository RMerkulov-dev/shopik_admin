import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import {NextResponse} from "next/server";

interface EditPageProps {
    productId: string
}

export async function GET(req: Request, {params}: { params: EditPageProps }) {
    await mongooseConnect();
    const {productId} = params

    if (!productId) {
        return
    }

    const editedProduct = await Product.findOne({_id: productId})

    return NextResponse.json(editedProduct)
}

export async function DELETE(req: Request, {params}: { params: EditPageProps }) {
    await mongooseConnect();
    const {productId} = params

    if (!productId) {
        return
    }

    const deletedProduct = await Product.deleteOne({_id: productId})
    return NextResponse.json(deletedProduct)
}
