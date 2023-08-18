// 'use client'
//
// import {useRouter} from "next/navigation";
// import {Controller, FieldValues, useForm} from "react-hook-form";
// import {addNewProduct} from "@/services/addNewProduct";
// import {Box, Button, TextField, Typography} from "@mui/material";
//
// const ProductForm = () => {
//     const router = useRouter()
//     const {
//         control,
//         handleSubmit,
//         formState: {errors},
//         reset
//     } = useForm({
//         defaultValues: {
//             title: "",
//             description: "",
//             price: 0,
//         }
//     })
//
//     const onSubmit = async (data: FieldValues) => {
//         try {
//             await addNewProduct(data);
//             reset();
//             router.push('/products')
//         } catch (error) {
//             console.error("Error submitting form:", error);
//         }
//     };
//
//     return (
//
//         <Box component="form" sx={{display: "flex", flexDirection: "column", gap: "20px"}}
//              onSubmit={handleSubmit(onSubmit)}>
//             <Typography variant="h5">New product</Typography>
//             <Controller name="title" control={control}
//                         render={({field: {onChange, value}}) => (
//                             <TextField id="prod_name" value={value} onChange={onChange} label="Product name"
//                                        variant="outlined"/>
//                         )}
//             />
//             <Controller name="description" control={control}
//                         render={({field: {onChange, value}}) => (
//                             <TextField id="prod_desc" value={value} onChange={onChange} label="Product description"
//                                        variant="outlined"/>
//                         )}
//             />
//             <Controller name="price" control={control}
//                         render={({field: {onChange, value}}) => (
//                             <TextField id="prod_price" value={value} onChange={onChange} type="number"
//                                        label="Price (in USD)" variant="outlined"/>
//                         )}
//             />
//             <Button type="submit" variant={"contained"}>Save</Button>
//         </Box>
//
//     );
// };
//
// export default ProductForm;
//
