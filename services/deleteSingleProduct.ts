import axios from "axios";
import toast from "react-hot-toast";

interface DeleteProduct {
    productId: string
    title: string
}

export const deleteSingleProduct = async ({productId, title}: DeleteProduct) => {

    try {
        const response = await axios.delete(`/api/${productId}`)
        toast.success(`${title} deleted successfully`)
        window.location.href = "/products";
        return response.data;
    } catch (err) {
        console.error("Error adding new product:", err);
        throw err;
    }
}
