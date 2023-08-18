import axios from "axios";
import {EditSingleProduct} from "@/types";


export const getOneProdyctById = async ({productId}: EditSingleProduct) => {

    try {
        const response = await axios.get(`/api/${productId}`)
        return response.data;
    } catch (err) {
        console.error("Error adding new product:", err);
        throw err;
    }
}
