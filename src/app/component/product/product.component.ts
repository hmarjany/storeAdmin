import { Component, OnInit } from '@angular/core';
import { RedComponentComponent } from "../red-component/red-component.component";
import { GridOptions } from "ag-grid-community";
import { EditComponentComponent } from "../edit-component/edit-component.component";
import { EditCategoryCellRendererComponent } from '../edit-category-cell-renderer/edit-category-cell-renderer.component';
import { Category } from 'src/app/model/enum/category';
import { CategoryType } from 'src/app/model/enum/CategoryType';
import { Product } from 'src/app/model/Product';
import { Brand } from 'src/app/model/enum/Brand';
import { SubCategory } from 'src/app/model/enum/SubCategory';
import { UplodFileComponent } from '../uplod-file/uplod-file.component';
import { CheckBoxComponent } from '../check-box/check-box.component';
import { AdditionalInfoComponent } from '../additional-info/additional-info.component';
import { HttpClient } from '@angular/common/http';
import { SelectBoxViewComponent } from '../select-box-view/select-box-view.component';
import { UplodFileViewComponent } from '../uplod-file-view/uplod-file-view.component';
import { server } from 'src/app/server';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private gridOptions: GridOptions;
  isEdit = false;
  isCheck = true;
  edit = 'Dont Edit';
  products: Product[];
  gridApi;
  gridColumnApi;
  selectedRow: Product;
  rowSelection;

  constructor(private http: HttpClient) {

    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true
    };

  }

  Save() {
    this.gridApi.stopEditing();
    this.http.post<Product[]>(server.serverUrl + 'product/save', this.products).subscribe(data => {
      this.products = data;
      this.gridApi.startEditingCell()
    });
  }

  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedNodes();
    selectedRows[0].data.IsDirty = true;
    this.selectedRow = selectedRows[0].data as Product;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getColumnDefs() {
    this.gridOptions.columnDefs = [
      {
        field: "Category",
        cellRenderer: this.isEditable() ? 'SelectBoxViewComponent' : '',
        cellEditor: 'editCategoryCellRenderer',
        editable: this.isCheck,
        cellRendererParams: Category,
        singleClickEdit: true,
        valueGetter: function (params) {
          if (params.data.Category) {
            return parseInt(params.data.Category);
          }
        }
      },
      {
        field: "CategoryType",
        cellRenderer: this.isEditable() ? 'SelectBoxViewComponent' : '',
        cellEditor: 'editCategoryCellRenderer',
        editable: this.isCheck,
        cellRendererParams: CategoryType,
        valueGetter: function (params) {
          if (params.data.CategoryType) {
            return parseInt(params.data.CategoryType);
          }
        }
      },
      {
        field: "SubCategory",
        cellRenderer: this.isEditable() ? 'SelectBoxViewComponent' : '',
        cellEditor: 'editCategoryCellRenderer',
        editable: this.isCheck,
        cellRendererParams: SubCategory,
        valueGetter: function (params) {
          if (params.data.SubCategory) {
            return parseInt(params.data.SubCategory);
          }
        }
      },
      {
        field: "ImagePath",
        cellRenderer:  '',
        cellEditor: 'UplodFileComponent',
        editable: this.isCheck

      },
      {
        field: "Name",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'editCellRenderer',
        editable: this.isCheck

      },
      {
        field: "Price",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'editCellRenderer',
        editable: this.isCheck

      },
      {
        field: "LastPrice",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'editCellRenderer',
        editable: this.isCheck

      },
      {
        field: "Barnd",
        cellRenderer: this.isEditable() ? 'SelectBoxViewComponent' : '',
        cellEditor: 'editCategoryCellRenderer',
        editable: this.isCheck,
        cellRendererParams: Brand,
        valueGetter: function (params) {
          if (params.data.Barnd) {
            return parseInt(params.data.Barnd);
          }
        }
      },
      {
        field: "Sale",
        cellRenderer: this.isEditable() ? 'CheckBoxComponent' : '',
        cellEditor: 'CheckBoxComponent',
        editable: this.isCheck

      },
      {
        field: "SpecialOffer",
        cellRenderer: this.isEditable() ? 'CheckBoxComponent' : '',
        cellEditor: 'CheckBoxComponent',
        editable: this.isCheck

      },
      {
        field: "Sepcification",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'editCellRenderer',
        editable: this.isCheck

      },
      {
        field: "AdditinalInfos",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'AdditionalInfoComponent',
        editable: this.isCheck

      },
      {
        field: "Quantity",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'editCellRenderer',
        editable: this.isCheck
      }
      // },
      // {
      //   headerName: "Value2",
      //   field: "value2",
      //   cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
      //   cellEditor: 'editCellRenderer',
      //   width: 100,
      //   editable: this.isCheck,
      //   valueSetter: function test2(params) {
      //     console.log(params);
      //     if (params.newValue != parseInt(params.oldValue)) {
      //       params.data.value2 = parseInt(params.newValue) * 2;
      //       console.log('ValueSetter', parseInt(params.newValue) * 2)
      //     } else {
      //       params.data.value2 = params.data.value2;
      //     }
      //     return true;
      //   },
      //   cellRendererParams: function (params) {
      //     return { validationMsg: 'Hello World' + params.value };
      //   },
      // },

      // {
      //   headerName: "Diff",
      //   width: 100,
      //   valueGetter: function aPlusBValueGetter(params) {
      //     if (params.data.value2 && params.data.value) {
      //       return parseInt(params.data.value2) - parseInt(params.data.value);
      //     }

      //   },
      //   editable: false
      // },


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
      UplodFileComponent: UplodFileComponent,
      CheckBoxComponent: CheckBoxComponent,
      AdditionalInfoComponent: AdditionalInfoComponent,
      SelectBoxViewComponent: SelectBoxViewComponent,
      UplodFileViewComponent: UplodFileViewComponent
    }
    this.gridOptions.rowData = this.products;
    this.gridOptions.singleClickEdit = true;
    this.gridOptions.getRowStyle = function(params) {
      if (params.data.Quantity < 4) {
          return { background: 'rgb(245 102 119 / 25%)' };
      }else{
        return { background: 'white' };
      }
  }
  }


  ngOnInit() {
    this.getGridData();
    this.http.get<Product[]>(server.serverUrl + 'product/getList').subscribe(data => {
      this.products = data;
    });
  }

  isEditable() {
    this.isEdit = true;
    return this.isEdit;
  }


  add() {
    this.products.push(new Product());
    this.gridOptions.api.setRowData(this.products);
  }

  Remove(){
    this.products.splice(this.products.indexOf(this.selectedRow), 1);
    this.gridOptions.api.setRowData(this.products);
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