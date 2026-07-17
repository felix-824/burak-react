import { Productcollection, ProductSize, ProductStatus } from "../enums/product.enum";

export interface Product {
    _id: string;
    ProductStatus: ProductStatus;
    Productcollection: Productcollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    ProductSize: ProductSize;
    ProductVolume: number;
    productDesc?: string;
    productImages: string[];
    productViews: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductInquiry {
    order: string;
    page: number;
    limit: number;
    productCollection?: Productcollection;
    search?: string;
}