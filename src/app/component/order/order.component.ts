import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GridOptions } from 'ag-grid-community';
import { Order } from 'src/app/model/Order';
import { server } from 'src/app/server';
import { CheckBoxComponent } from '../check-box/check-box.component';
import { EditCategoryCellRendererComponent } from '../edit-category-cell-renderer/edit-category-cell-renderer.component';
import { EditComponentComponent } from '../edit-component/edit-component.component';
import { PurchasedItemComponent } from '../purchased-item/purchased-item.component';
import { RedComponentComponent } from '../red-component/red-component.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  gridOptions: GridOptions;
  isEdit = false;
  isCheck = true;
  edit = 'Dont Edit';
  orders: Order[];
  gridApi;
  gridColumnApi;
  selectedRow = new Order();
  rowSelection;
  orderForm: FormGroup;
  displayedColumns: string[] = ['count', 'name'];
  showEdit = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true
    };

  }

  ngOnInit() {
    this.getGridData();
    this.http.get<Order[]>(server.serverUrl + 'order/getList').subscribe(data => {
      this.orders = data;
    });

    this.orderForm = this.formBuilder.group({
      purchasedItem: [''],
      pickUp: [''],
      deliverdStatus: [''],
      pitotalPriceckUp: [''],
      totalPrice: [''],
      paymentStatus: [''],
      deliverDate: [''],
      paymentDate: [''],
      payOnline: [''],
      address: [''],
      deliverTo: [''],
      deliverToPhone: [''],
      purchasedUserDetails: ['']
    });
  }

  EditSelectedRow() {
    if(!this.selectedRow._id){
      return;
    }
    if (this.showEdit) {
      this.showEdit = false;
      this.gridApi.startEditingCell()
    } else {
      this.gridApi.stopEditing();
      this.showEdit = true;
    }
  }

  SaveRow(){
    this.orders[this.orders.indexOf(this.orders.find(x=>x._id === this.selectedRow._id))] = this.selectedRow;
    this.gridOptions.rowData = this.orders;
    this.gridApi.refreshCells(this.selectedRow);
    this.showEdit = false;
    this.gridApi.startEditingCell()
  }

  Save() {
    this.gridApi.stopEditing();
    this.http.post<Order[]>(server.serverUrl + 'orders/save', this.orders).subscribe(data => {
      this.orders = data;
      this.gridApi.startEditingCell()
    });
  }

  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedNodes();
    this.selectedRow = selectedRows[0].data as Order;
    this.orderForm.patchValue(this.selectedRow);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getColumnDefs() {
    this.gridOptions.columnDefs = [
      {
        field: "pickUp",
        cellRenderer: 'CheckBoxComponent',
        cellEditor: 'CheckBoxComponent',
        editable: true
      },
      {
        field: "deliverdStatus",
        cellRenderer: 'CheckBoxComponent',
        cellEditor: 'CheckBoxComponent',
        editable: true
      },
      {
        field: "payOnline",
        cellRenderer: 'CheckBoxComponent',
        editable: false
      },
      {
        field: "totalPrice",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "payOnline",
        cellRenderer: 'CheckBoxComponent',
        editable: false
      },
      {
        field: "purchasedItem",
        cellRenderer: 'PurchasedItemComponent',
        editable: false
      },
      {
        field: "deliverTo",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "deliverToPhone",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "address",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "deliverDate",
        cellRenderer: 'redCellRenderer',
        editable: false
      },
      {
        field: "paymentDate",
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
      redCellRenderer: RedComponentComponent,
      editCategoryCellRenderer: EditCategoryCellRendererComponent,
      CheckBoxComponent: CheckBoxComponent,
      PurchasedItemComponent: PurchasedItemComponent
    }
    this.gridOptions.rowData = this.orders;
    this.gridOptions.singleClickEdit = true;
    this.gridOptions.getRowHeight = function (params) {
      return 42 * params.data.purchasedItem.length;
    }
    this.gridOptions.getRowStyle = function (params) {
      if (!params.data.pickUp && !params.data.deliverdStatus) {
        return { background: 'red' };
      }

      if (!params.data.pickUp) {
        return { background: 'orange' };
      }

      if (!params.data.deliverdStatus) {
        return { background: '#E91E63' };
      }

      if (params.data.payOnline) {
        return { background: 'green' };
      }

      return { background: 'white' };
    }
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
