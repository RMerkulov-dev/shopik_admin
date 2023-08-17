'use client'

import {Layout} from "@/app/components";
import {useEffect, useState} from "react";
import {getEditedProduct} from "@/helpers/getEditedProduct";
import {EditedProduct, EditPageProps} from "@/types";
import EditProductForm from "@/app/components/EditProductForm";
import {Typography} from "@mui/material";


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
            <Typography variant="h5">Edit product</Typography>
            {/*<ProductForm/>*/}
            <EditProductForm {...productInfo}/>
        </Layout>
    );
};

export default EditProductPage;


