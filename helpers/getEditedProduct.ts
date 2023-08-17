import axios from "axios";

interface EditPageProps {
    productId: string
}

export const getEditedProduct = async ({productId}: EditPageProps) => {

    try {
        const response = await axios.get(`/api/${productId}`)
        return response.data;
    } catch (err) {
        console.error("Error adding new product:", err);
        throw err;
    }
}
