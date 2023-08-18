'use client'

import {Layout} from "@/app/components";
import {Box, Button, Typography} from "@mui/material";
import {useRouter} from "next/navigation";
import {EditPageProps, SingleProduct} from "@/types";
import {useEffect, useState} from "react";
import {getOneProdyctById} from "@/services/getOneProdyctById";
import {deleteSingleProduct} from "@/services/deleteSingleProduct";

const DeleteProduct = ({params}: EditPageProps) => {
    const [productInfo, setProductInfo] = useState<SingleProduct>({
        title: "",
        description: "",
        price: 0
    });
    const {title} = productInfo
    const router = useRouter()
    const {productId} = params

    useEffect(() => {
        if (!productId) {
            return
        }
        getOneProdyctById({productId}).then((res) => setProductInfo(res))

    }, [productId]);


    return (
        <Layout>
            <Typography variant="h5">Do you really want to delete <span>{productInfo.title}</span> ?</Typography>
            <Box sx={{marginTop: "40px", display: "flex", gap: "30px"}}>
                <Button variant="outlined" sx={{color: "green", borderColor: "green"}}
                        onClick={() => deleteSingleProduct({productId, title})}>Yes</Button>
                <Button variant="outlined" sx={{color: "red", borderColor: "red"}}
                        onClick={() => router.push('/products')}>No</Button>
            </Box>
        </Layout>
    );
};

export default DeleteProduct;

