import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';
import { PurchasedItem } from 'src/app/model/PurchasedItem';

@Component({
  selector: 'app-purchased-item',
  templateUrl: './purchased-item.component.html',
  styleUrls: ['./purchased-item.component.scss']
})
export class PurchasedItemComponent  implements INoRowsOverlayAngularComp  {
  public params: any;
  public value: PurchasedItem;

    @ViewChild('containerPurchasedItem', {static: true, read: ViewContainerRef}) container: ViewContainerRef;

  agInit(params: any): void {
    this.params = params;
    this.value = this.params.value;
  }

  getValue(): any {
    return this.value;
  }

  isCancelAfterEnd(): boolean {
    return false;
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.container.element.nativeElement.focus();
    });
  }

}
