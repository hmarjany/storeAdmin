import { Category } from './enum/category';
import { SubCategory } from './enum/SubCategory';
import { CategoryType } from './enum/CategoryType';
import { AdditionalInfo } from './AdditionalInfo';
import { Brand } from './enum/Brand';
import { Guid } from '../Guid ';
import { Size } from './Size';
import { Comment } from './Comment';

export class Product {
    _id?: any = 0;
    HASH?: any;
    SendVocuher: Boolean;
    Category?: Category;
    CategoryType?: CategoryType;
    SubCategory?: SubCategory;
    ImagePath?: Array<String>;
    Name?: string;
    Price?: number;
    LastPrice: number;
    Barnd?: Brand;
    Sale?: Boolean;
    SpecialOffer?: Boolean;
    Sepcification?: string;
    AdditinalInfos = [
        { key: 'وزن', value: '' },
        { key: 'رنگ', value: '' },
        { key: 'ابعاد', value: '' },
        { key: 'سایز', value: '' },
        { key: 'جنس', value: '' }
    ];
    Size:Array<Size>;
    Comments?: Array<Comment>;
    Quantity?: number;
    FirstQuantity?: number;
    IsDirty: boolean = false;
    desc: string;
}