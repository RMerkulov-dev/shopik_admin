'use client'

import {Layout} from "@/app/components";
import {useRouter} from "next/navigation";

const EditProductPage = () => {
    const router = useRouter()
    console.log({router})

    return (
        <Layout>
            EditProduct
        </Layout>
    );
};

export default EditProductPage;


