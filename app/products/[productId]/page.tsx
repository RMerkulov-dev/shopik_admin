'use client'

import {Layout} from "@/app/components";
import {useEffect, useState} from "react";
import {getEditedProduct} from "@/helpers/getEditedProduct";
import {EditedProduct, EditPageProps} from "@/types";


const EditProductPage = ({params}: EditPageProps) => {
    const [product, setProduct] = useState<EditedProduct>({
        title: "",
        description: "",
        price: 0
    });
    const {productId} = params

    useEffect(() => {
        getEditedProduct({productId}).then((res) => setProduct(res))
    }, [productId]);


    return (
        <Layout>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </Layout>
    );
};

export default EditProductPage;


