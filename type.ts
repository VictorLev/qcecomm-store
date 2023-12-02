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
    nameEn: string;
    nameFr: string;
    nameSp: string;
    billboard: Billboard;
}

export interface Product {
    id: string;
    category: Category;
    nameEn: string;
    nameFr: string;
    nameSp: string;
    descriptionEn: string;
    descriptionFr: string;
    descriptionSp: string;
    price: string;
    isFreatured: boolean;
    size: Size;
    color: Color;
    province: Province;
    cday: Cday;
    type: Type;
    sportsteam: Sportsteam;
    images: ProductImage[];
}

export interface ProductImage {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    valueEn: string;
    valueFr: string;
    valueSp: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;    
}

export interface Province {
    id: string;
    name: string;
    valueEn: string;
    valueFr: string;
    valueSp: string;
}

export interface Cday {
    id: string;
    name: string;
    valueEn: string;
    valueFr: string;
    valueSp: string;
}

export interface Sportsteam {
    id: string;
    name: string;
    valueEn: string;
    valueFr: string;
    valueSp: string;
}

export interface Type {
    id: string;
    name: string;
    valueEn: string;
    valueFr: string;
    valueSp: string;
}