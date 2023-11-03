export interface Billboard {
    id:string;
    label: string;
    images:BillboardImage[];
}

export interface BillboardImage {
    id: string;
    url: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFreatured: boolean;
    size: Size;
    color: Color;
    images: ProductImage[];
}

export interface ProductImage {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}