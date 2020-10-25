import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { GridOptions } from 'ag-grid-community';
import { DeliverTime } from 'src/app/model/enum/DeliverTime';
import { Order } from 'src/app/model/Order';
import { Reject } from 'src/app/model/Reject';
import { server } from 'src/app/server';
import { CheckBoxComponent } from '../check-box/check-box.component';
import { EditCategoryCellRendererComponent } from '../edit-category-cell-renderer/edit-category-cell-renderer.component';
import { EditComponentComponent } from '../edit-component/edit-component.component';
import { PurchasedItemComponent } from '../purchased-item/purchased-item.component';
import { RedComponentComponent } from '../red-component/red-component.component';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.scss']
})
export class RejectComponent implements OnInit {

  gridOptions: GridOptions;
  isEdit = false;
  isCheck = true;
  edit = 'Dont Edit';
  rejects: Reject[];
  gridApi;
  gridColumnApi;
  selectedRow = new Reject();
  rowSelection;
  rejectForm: FormGroup;
  showEdit = false;



  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) document,
    private ref: ChangeDetectorRef) {

    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true
    };


  }

  ngOnInit() {
    this.getGridData();
    this.http.get<Reject[]>(server.serverUrl + 'order/getRejectList').subscribe(data => {
      this.rejects = data;
    });
    this.rejectForm = this.formBuilder.group({
      approved: [''],
      count: [''],
      deliverDate: [''],
      deliverTime: [''],
      deliverToPhone: [''],
      deliverToAddress: [''],
      deliverTo: [''],
      userName: [''],
      ProductName: ['']
    });
  }

  EditSelectedRow() {
    if (!this.selectedRow._id) {
      return;
    }
    if (this.showEdit) {
      this.showEdit = false;
    } else {
      this.showEdit = true;
    }
  }

  Save() {
    
  }

  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedNodes();
    this.selectedRow = selectedRows[0].data as Reject;
    this.rejectForm.patchValue(this.selectedRow);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getColumnDefs() {
    this.gridOptions.columnDefs = [
      {
        field: "approved",
        cellRenderer: 'CheckBoxComponent',
        editable: false
      },
      {
        field: "deliverDate",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "deliverTime",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "count",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "ProductName",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "deliverToPhone",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "deliverToAddress",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "deliverTo",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "userName",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      

    ];

    this.rowSelection = 'single';
  }

  defaultColumnDefs() {
    if (this.isCheck) {
      this.gridOptions.defaultColDef = {
        resizable: true,
        flex: 1,
        // minWidth: 220,
        editable: function (params) {
          return (
            false
          );
        },
      }
    } else {
      this.gridOptions.defaultColDef = {
        resizable: true,
        flex: 1,
        //minWidth: 220,
        editable: function (params) {
          return (
            false
          );
        },
      }
    }

  }

  getGridData() {
    this.defaultColumnDefs();
    this.getColumnDefs();
    this.gridOptions.frameworkComponents = {
      redCellRenderer: RedComponentComponent,
      CheckBoxComponent: CheckBoxComponent,
    }
    this.gridOptions.rowData = this.rejects;
    this.gridOptions.singleClickEdit = true;
    this.gridOptions.enableRtl = true;
  }

  show() {
    this.isCheck = !this.isCheck;
    this.edit = this.isCheck === true ? 'Edit' : 'Dont Edit';
    const columnDef = this.gridOptions.api.getColumnDef('value');
    columnDef.editable = this.isCheck;
    const columnDef2 = this.gridOptions.api.getColumnDef('value2');
    columnDef2.editable = this.isCheck;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {


  }
}
