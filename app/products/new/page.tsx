'use client'

import {Layout} from "@/app/components";
import {Box, Button, TextField, Typography} from "@mui/material";

const AddNewProduct = () => {
    return (
        <Layout>
            <Box component="form" sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
                <Typography variant="h5">New product</Typography>
                <TextField id="prod_name" label="Product name" variant="outlined"/>
                <TextField id="prod_desc" label="Product description" variant="outlined"/>
                <TextField id="prod_price" type="number" label="Price (in USD)" variant="outlined"/>
                <Button type="submit" variant={"contained"}>Save</Button>
            </Box>

        </Layout>
    );
};

export default AddNewProduct;

