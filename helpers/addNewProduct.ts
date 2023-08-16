import {FieldValues} from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export const addNewProduct = async (data: FieldValues) => {
    try {
        const response = await axios.post('/api/add_product', data);
        toast.success("Product added.")
        return response.data;
    } catch (error) {
        toast.error("Failed to add product.")
        console.error("Error adding new product:", error);
        throw error;

    }
};

