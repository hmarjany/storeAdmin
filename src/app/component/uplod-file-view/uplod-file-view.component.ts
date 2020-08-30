import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-uplod-file-view',
  templateUrl: './uplod-file-view.component.html',
  styleUrls: ['./uplod-file-view.component.scss']
})
export class UplodFileViewComponent implements INoRowsOverlayAngularComp {
  public params: any;
  public valueTemp: Array<string>;
  public value: Array<string> = new Array<string>();
  pathConst = 'assets/';

  @ViewChild('containerUplodFileView', { static: true, read: ViewContainerRef }) container: ViewContainerRef;

  agInit(params: any): void {
    this.params = params;
    this.valueTemp = this.params.value;
    if(this.valueTemp!=undefined){
    this.valueTemp.forEach(element => {
      this.value.push(this.pathConst + element);
    });
  }
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