'use client'

import {Box, Button, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import {addNewProduct} from "@/helpers/addNewProduct";
import {useRouter} from "next/navigation";
import {EditedProduct} from "@/types";

const EditProductForm = ({title: editTitle, description: editDescription, price: editPrice, _id}: EditedProduct) => {
    const router = useRouter()
    const [title, setTitle] = useState(editTitle || '');
    const [description, setDescription] = useState(editDescription || '');
    const [price, setPrice] = useState(editPrice || '');


    useEffect(() => {
        if (editTitle || editDescription || editPrice) {
            setTitle(editTitle)
            setDescription(editDescription)
            setPrice(editPrice)
        }

    }, [editTitle, editDescription, editPrice]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            title, description, price
        }
        try {
            if (_id) {
                //update product
            } else {
                //create product
                await addNewProduct(data);
                setTitle("");
                setDescription("");
                setPrice("");
                router.push('/products')
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }


    return (
        <Box component="form" sx={{display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px"}}
             onSubmit={handleSubmit}>
            <TextField id="edit_prod_name" name="title" value={title} label="Product name" variant="outlined"
                       onChange={e => setTitle(e.target.value)}/>
            <TextField id="edit_prod_desc" name="description" value={description} label="Product description"
                       variant="outlined" onChange={e => setDescription(e.target.value)}/>
            <TextField id="edit_prod_price" name="price" value={price} type="number" label="Price (in USD)"
                       variant="outlined" onChange={e => setPrice(e.target.value)}/>
            <Button type="submit" variant={"contained"}>Save</Button>
        </Box>
    );
};

export default EditProductForm;

