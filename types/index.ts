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

export type EditedProduct = {
    _id?: string;
    title: string;
    description: string;
    price: number;
}
