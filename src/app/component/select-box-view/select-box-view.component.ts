import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-select-box-view',
  templateUrl: './select-box-view.component.html',
  styleUrls: ['./select-box-view.component.scss']
})
export class SelectBoxViewComponent implements INoRowsOverlayAngularComp {
  public params: any;
  public value: any;
  public EnumType: any;

  @ViewChild('containerSelectBoxView', {static: true, read: ViewContainerRef}) container: ViewContainerRef;

  agInit(params: any): void {
    var enumType = params.colDef.cellRendererParams;
    this.EnumType = enumType;
    this.params = params;
    this.value = this.EnumType[this.params.value];
  }

  getValue(): any {
    return this.EnumType[this.value];
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