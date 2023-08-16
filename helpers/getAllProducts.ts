import axios from "axios";

export const getAllProducts = async () => {
    try {
        const response = await axios.get('/api/all_products')
        return response.data;
    } catch (err) {
        console.error("Error adding new product:", err);
        throw err;
    }
}
