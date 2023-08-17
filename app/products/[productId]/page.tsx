'use client'

import {Layout} from "@/app/components";
import axios from "axios";
import {useEffect} from "react";

interface EditPageProps {
    params: { productId: string }
}

const EditProductPage = ({params}: EditPageProps) => {
    const {productId} = params
    console.log(productId)

    useEffect(() => {
        axios.get(`/api/product/${productId}`).then(res => console.log(res.data))
    }, []);

    // const getSingleProduct = async () => {
    //     try {
    //         const response = await axios.get(`/api/products/${productId}`)
    //         return response.data;
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    //
    // console.log(getSingleProduct().then(res => console.log(res)))


    return (
        <Layout>
            EditProduct
        </Layout>
    );
};

export default EditProductPage;


