export interface UserAvatarProps {
    avatar: string;
}

export interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
}

export interface EditPageProps {
    params: { productId: string }
}


export type SingleProduct = {
    _id?: string;
    title: string;
    description: string;
    price: number | string;
}


export interface DeleteProduct {
    productId: string
    title: string
}

export interface EditSingleProduct {
    productId: string
}
