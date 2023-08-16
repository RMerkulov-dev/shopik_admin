import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import {NextResponse} from "next/server";

export async function POST(req: any) {
    const body = await req.json();
    await mongooseConnect();
    const {title, description, price} = body;
    const productDoc = await Product.create({
        title, description, price
    })
    return NextResponse.json(productDoc)
}


