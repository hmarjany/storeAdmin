import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Comment } from 'src/app/model/Comment';
import { Product } from 'src/app/model/Product';
import { server } from 'src/app/server';
import { EditComponentComponent } from '../edit-component/edit-component.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  gridOptions: GridOptions;
  comments: Array<Comment>;
  gridApi;
  gridColumnApi;
  selectedRow: Comment;
  rowSelection;

  constructor(private http: HttpClient) {

    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true
    };

  }

  ngOnInit() {
    this.getGridData();
    this.http.get<Array<Product>>(server.serverUrl + 'product/getComments').subscribe(data => {
      this.comments = new Array<Comment>();
      if(data.length <=0){
        return;
      }
      data.forEach(item => {
        if(item.Comments.length > 0){
          item.Comments.forEach(comment=>{
            if(!comment.approved){
              this.comments.push(comment);
            }
          })
          
        }
      })
    });
  }

  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedNodes();
    this.selectedRow = selectedRows[0].data as Comment;
  }

  approved(){
    this.selectedRow.approved = true;
    this.http.post<Comment>(server.serverUrl + 'product/approved', this.selectedRow).subscribe(data => {
          
    });
  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getColumnDefs() {
    this.gridOptions.columnDefs = [
      {
        field: "description",
      }
    ];

    this.rowSelection = 'single';
  }

  getGridData() {
    this.gridOptions.defaultColDef = {
      resizable: true,
      flex: 1,
      editable: function (params) {
        return (
          false
        );
      },
    }
    this.getColumnDefs();
    this.gridOptions.frameworkComponents = {
      redCellRenderer: EditComponentComponent,
    }
    this.gridOptions.rowData = this.comments;
    this.gridOptions.singleClickEdit = true;
  }



}
