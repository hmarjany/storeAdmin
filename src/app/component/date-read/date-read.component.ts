import { Component, OnInit } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-date-read',
  templateUrl: './date-read.component.html',
  styleUrls: ['./date-read.component.scss']
})
export class DateReadComponent implements INoRowsOverlayAngularComp {


  constructor() { }

  ngOnInit() {
  }

  params: any;
  public value: any;

  agInit(params: any): void {
    this.params = params;
  }
  getValue(): any {
    return this.value;
  }

  refresh() {
    return false;
  }


  hasValidationMsg() {
    if (this.params === undefined) {
      return;
    }
    return this.params.validationMsg ? this.params.validationMsg : 'No Value';
  }
}
