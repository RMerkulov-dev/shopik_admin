import {Layout} from "@/app/components";
import {Button} from "@mui/material";
import Link from "next/link";

const Products = () => {


    return (
        <Layout>
            <Link href={'/products/new'}>
                <Button variant="outlined">ADD PRODUCT</Button>
            </Link>

        </Layout>
    );
};

export default Products;

