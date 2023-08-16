'use client'
import {Layout} from "@/app/components";
import {Button, IconButton} from "@mui/material";
import Link from "next/link";
import {useEffect, useState} from "react";
import {getAllProducts} from "@/helpers/getAllProducts";
import {Product} from "@/types";
import {BiEdit} from "react-icons/bi";


const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    console.log(products)

    useEffect(() => {
        getAllProducts().then(res => setProducts(res))
    }, []);

    return (
        <Layout>
            <Link href={'/products/new'}>
                <Button variant="contained" sx={{background: "gray"}}>ADD PRODUCT</Button>
            </Link>
            <table>
                <thead>
                <tr>
                    <td>Product name</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product._id}>
                        <td>{product.title}</td>
                        <td><Button variant="outlined" sx={{borderColor: "green", color: "green"}}>
                            <Link href={`/products/${product._id}`}>
                                <IconButton>
                                    <BiEdit/>
                                </IconButton>
                                Edit
                            </Link>
                        </Button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Layout>
    );
};

export default Products;

