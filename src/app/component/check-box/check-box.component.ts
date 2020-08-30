import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';
import { INoRowsOverlayParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent  implements INoRowsOverlayAngularComp {
  public params: any;
  public value: any;

  @ViewChild('containerCheckBox', {static: true, read: ViewContainerRef}) container: ViewContainerRef;

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