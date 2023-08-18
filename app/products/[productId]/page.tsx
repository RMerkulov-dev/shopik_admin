'use client'

import {Layout} from "@/app/components";
import {useEffect, useState} from "react";
import {getOneProdyctById} from "@/services/getOneProdyctById";
import {EditPageProps, SingleProduct} from "@/types";
import ProductFormState from "@/app/components/ProductFormState";
import {Typography} from "@mui/material";


const EditProductPage = ({params}: EditPageProps) => {
    const [productInfo, setProductInfo] = useState<SingleProduct>({
        title: "",
        description: "",
        price: 0
    });
    const {productId} = params

    useEffect(() => {
        getOneProdyctById({productId}).then((res) => setProductInfo(res))
    }, [productId]);


    return (
        <Layout>
            <Typography variant="h5">Edit product</Typography>
            {productInfo && (
                <ProductFormState {...productInfo}/>
            )}

        </Layout>
    );
};

export default EditProductPage;


