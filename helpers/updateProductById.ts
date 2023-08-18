import axios from "axios";
import {SingleProduct} from "@/types";

export const updateProductById = async (data: SingleProduct, _id: string): Promise<void> => {
    try {
        const response = await axios.put(`/api/all_products`, {...data, _id})
        return response.data;
    } catch (err) {
        console.error("Error adding new product:", err);
        throw err;
    }
}
