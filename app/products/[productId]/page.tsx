'use client'

import {Layout} from "@/app/components";
import {useEffect, useState} from "react";
import {getEditedProduct} from "@/helpers/getEditedProduct";
import {EditedProduct, EditPageProps} from "@/types";
import ProductForm from "@/app/components/ProductForm";


const EditProductPage = ({params}: EditPageProps) => {
    const [productInfo, setProductInfo] = useState<EditedProduct>({
        title: "",
        description: "",
        price: 0
    });
    const {productId} = params

    useEffect(() => {
        getEditedProduct({productId}).then((res) => setProductInfo(res))
    }, [productId]);


    return (
        <Layout>
            <p>{productInfo.title}</p>
            <p>{productInfo.description}</p>
            <p>{productInfo.price}</p>
            <ProductForm/>
        </Layout>
    );
};

export default EditProductPage;


