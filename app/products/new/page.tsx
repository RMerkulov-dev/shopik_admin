'use client'

import {Layout} from "@/app/components";
import {Box, Button, TextField, Typography} from "@mui/material";
import {Controller, FieldValues, useForm} from "react-hook-form";

const AddNewProduct = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        defaultValues: {
            title: "",
            description: "",
            price: 0,
        }
    })

    const onSubmit = (data: FieldValues) => {
        console.log(data)
        reset()
    }

    return (
        <Layout>
            <Box component="form" sx={{display: "flex", flexDirection: "column", gap: "20px"}}
                 onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h5">New product</Typography>
                <Controller name="title" control={control}
                            render={({field: {onChange, value}}) => (
                                <TextField id="prod_name" value={value} onChange={onChange} label="Product name"
                                           variant="outlined"/>
                            )}
                />
                <Controller name="description" control={control}
                            render={({field: {onChange, value}}) => (
                                <TextField id="prod_desc" value={value} onChange={onChange} label="Product description"
                                           variant="outlined"/>
                            )}
                />
                <Controller name="price" control={control}
                            render={({field: {onChange, value}}) => (
                                <TextField id="prod_price" value={value} onChange={onChange} type="number"
                                           label="Price (in USD)" variant="outlined"/>
                            )}
                />
                <Button type="submit" variant={"contained"}>Save</Button>
            </Box>
        </Layout>
    );
};

export default AddNewProduct;

