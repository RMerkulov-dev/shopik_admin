import {FieldValues} from "react-hook-form";
import axios from "axios";

export const addNewProduct = async (data: FieldValues) => {
    try {
        const response = await axios.post('/api/add_product', data);
        return response.data;
    } catch (error) {
        console.error("Error adding new product:", error);
        throw error;
    }
};

