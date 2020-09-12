import { Category } from './enum/category';
import { SubCategory } from './enum/SubCategory';
import { CategoryType } from './enum/CategoryType';
import { AdditionalInfo } from './AdditionalInfo';
import { Brand } from './enum/Brand';

export class Product {
    _id?: any = 0;
    HASH?: any;
    Category?: Category;
    CategoryType?: CategoryType;
    SubCategory?: SubCategory;
    ImagePath?: String;
    Name?: String;
    Price?: Number;
    LastPrice: Number;
    Barnd?: Brand;
    Sale?: Boolean;
    SpecialOffer?: Boolean;
    Sepcification?: String;
    AdditinalInfos?: { key: String, value: String }[];
    Comments?: Comment;
    Quantity?: Number;
    IsDirty: boolean = false;
}