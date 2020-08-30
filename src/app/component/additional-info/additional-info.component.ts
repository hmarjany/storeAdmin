import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit, INoRowsOverlayAngularComp {

  constructor() { }

  ngOnInit() {
  }

  public params: any;
  public value: any;

  @ViewChild('containerDic', {static: true, read: ViewContainerRef}) container: ViewContainerRef;

  isPopup(){
    return true;
  }

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
