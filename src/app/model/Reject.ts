import { DeliverTime } from './enum/DeliverTime';

export class Reject{
    _id:any;
    productId: any;
    count: number;
    deliverToPhone: string;
    deliverToAddress: string;
    deliverTo:string;
    userName:string;
    ProductName: string;
    approved:boolean = false;
    deliverDate: Date;
    deliverTime: DeliverTime;
}