import { DeliverTime } from './enum/DeliverTime';
import { Purchased } from './Purchased';
import { PurchasedItem } from './PurchasedItem';

export class Order{
    _id: any;
    purchasedItem:Array<PurchasedItem>;
    pickUp: boolean = false;
    deliverdStatus: boolean = false;
    totalPrice: number;
    paymentStatus: boolean;
    deliverDate: Date;
    deliverTime: DeliverTime;
    paymentDate:Date;
    payOnline: boolean;
    address: string;
    deliverTo: string;
    deliverToPhone: string;
    purchasedUserDetails:Purchased;
    refId: any;
}