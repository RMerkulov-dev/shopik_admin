import axios from "axios";
import toast from "react-hot-toast";
import {SingleProduct} from "@/types";

export const addNewProduct = async (data: SingleProduct) => {
    const {title} = data
    try {
        const response = await axios.post('/api/add_product', data);
        toast.success(`${title} successfully added.`)
        return response.data;
    } catch (error) {
        toast.error("Failed to add product.")
        console.error("Error adding new product:", error);
        throw error;

    }
};

