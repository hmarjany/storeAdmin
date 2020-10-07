import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { InventoryVoucher } from 'src/app/model/InventoryVoucher';
import { server } from 'src/app/server';
import { CheckBoxComponent } from '../check-box/check-box.component';
import { EditCategoryCellRendererComponent } from '../edit-category-cell-renderer/edit-category-cell-renderer.component';
import { EditComponentComponent } from '../edit-component/edit-component.component';
import { PurchasedItemComponent } from '../purchased-item/purchased-item.component';

@Component({
  selector: 'app-acounting',
  templateUrl: './acounting.component.html',
  styleUrls: ['./acounting.component.scss']
})
export class AcountingComponent implements OnInit {

 
  gridOptions: GridOptions;
  isEdit = false;
  isCheck = true;
  edit = 'Dont Edit';
  inventoryVouchers: InventoryVoucher[];
  gridApi;
  gridColumnApi;
  selectedRow: InventoryVoucher;
  rowSelection;

  constructor(private http: HttpClient) {

    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true
    };

  }

  ngOnInit() {
    this.getGridData();
    this.http.get<InventoryVoucher[]>(server.serverUrl + 'voucher/getList').subscribe(data => {
      this.inventoryVouchers = data;
    });
  }

  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedNodes();
    this.selectedRow = selectedRows[0].data as InventoryVoucher;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getColumnDefs() {
    this.gridOptions.columnDefs = [
      {
        field: "incomeDate",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "incomeProduct",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "productsQuantity",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "totalPrice",
        cellRenderer: 'redCellRenderer',
        editable: false
      }

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
            true
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
      editCellRenderer: EditComponentComponent,
      redCellRenderer: EditComponentComponent,
      editCategoryCellRenderer: EditCategoryCellRendererComponent,
      CheckBoxComponent: CheckBoxComponent,
      PurchasedItemComponent: PurchasedItemComponent
    }
    this.gridOptions.rowData = this.inventoryVouchers;
    this.gridOptions.singleClickEdit = true;
  }

  show() {
    this.isCheck = !this.isCheck;
    this.edit = this.isCheck === true ? 'Edit' : 'Dont Edit';
    const columnDef = this.gridOptions.api.getColumnDef('value');
    columnDef.editable = this.isCheck;
    const columnDef2 = this.gridOptions.api.getColumnDef('value2');
    columnDef2.editable = this.isCheck;
  }

}
