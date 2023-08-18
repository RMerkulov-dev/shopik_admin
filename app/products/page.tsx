'use client'
import {Layout} from "@/app/components";
import {Button, IconButton} from "@mui/material";
import Link from "next/link";
import {useEffect, useState} from "react";
import {getAllProducts} from "@/services/getAllProducts";
import {Product} from "@/types";
import {BiEdit} from "react-icons/bi";
import {LuDelete} from "react-icons/lu";


const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);


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
                        <td className="table-btn-wrapper">
                            <Button variant="outlined" sx={{borderColor: "green", color: "green"}}>
                                <Link href={`/products/${product._id}`}>
                                    <IconButton>
                                        <BiEdit/>
                                    </IconButton>
                                    Edit
                                </Link>
                            </Button>
                            <Button variant="outlined" sx={{borderColor: "red", color: "red"}}>
                                <Link href={`/products/delete/${product._id}`}>
                                    <IconButton>
                                        <LuDelete/>
                                    </IconButton>
                                    Delete
                                </Link>
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Layout>
    );
};

export default Products;

