import { Product } from './Product';

export class InventoryVoucher{
    _id:any = 0;
    incomeDate: Date = new Date();
    incomeProduct: Product;
    productsQuantity:  number;
    totalPrice: number;
}