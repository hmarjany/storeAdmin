import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpRequest, HttpResponse, HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';
import { INoRowsOverlayParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { Guid } from 'src/app/Guid ';
import { server } from 'src/app/server';

@Component({
  selector: 'app-uplod-file',
  templateUrl: './uplod-file.component.html',
  styleUrls: ['./uplod-file.component.scss']
})
export class UplodFileComponent implements INoRowsOverlayAngularComp {

  accept = '*'
  files: File[] = []
  progress: number
  url = server.serverUrl + 'upload'
  hasBaseDropZoneOver: boolean = false
  httpEmitter: Subscription
  httpEvent: HttpEvent<{}>
  lastFileAt: Date

  sendableFormData: FormData
  sendableFormDataUniqName: FormData = new FormData()
  imagePath: Array<string> = []
  imagePathClone: Array<string> = []

  dragFiles: any
  validComboDrag: any
  lastInvalids: any
  fileDropDisabled: any
  maxSize: any
  baseDropValid: any
  value: [string];
  params: any;
  pathConst = 'assets/';

  constructor(public HttpClient: HttpClient) { }
  agInit(params: INoRowsOverlayParams): void {
    this.params = params;
    this.value = this.params.value;

    this.EditImages();
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {

  }

  getValue(): any {
    this.EditImages();
    return this.imagePath;
  }

  isPopup(): boolean {
    return true;
  }

  cancel() {
    this.progress = 0
    if (this.httpEmitter) {
      console.log('cancelled')
      this.httpEmitter.unsubscribe()
    }
  }

  removeItem(i: number){
    var file = this.files[i];
    var image = this.value.find(x=>x === file.name);
    if(image){
      var imageIndex = this.value.indexOf(image);
      this.value.splice(imageIndex ,1);
      this.imagePath = this.value;
    }
    this.files.splice(i,1);
  }

  private EditImages() {
    if (this.value != undefined) {
      this.value.forEach((item) => {
        var blob = null;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'assets/' + item);
        xhr.responseType = "blob";
        xhr.onload = () => {
          blob = xhr.response;
          var file = new File([blob], item, { type: 'image/' + item.substring(item.indexOf(".") + 1, item.length), lastModified: Date.now() });
          if (this.files.filter(x => x.name === file.name).length <= 0) {
            this.files.push(file);
            this.imagePath.push(file.name);
          }
        };
        xhr.send();
      });
    }

    this.imagePathClone = Object.create(this.imagePath);
  }

  uploadFiles(): Subscription {
    this.ImagePath();
    var hasData = false;
    this.sendableFormDataUniqName.forEach(item=>{
      hasData = true;
    });

    if(!hasData){

      return;
    }
    const req = new HttpRequest<FormData>(
      'POST',
      this.url,
      this.sendableFormDataUniqName, {
      reportProgress: true, responseType: 'text'
    })

    return this.httpEmitter = this.HttpClient.request(req)
      .subscribe(
        event => {
          this.httpEvent = event

          if (event instanceof HttpResponse) {
            delete this.httpEmitter
            console.log('request done', event)
          }
        },
        error => alert('Error Uploading Files: ' + error.message)
      )
  }

  private ImagePath() {
    this.sendableFormData.forEach((item) => {
      var file = item as File;
      var result = this.imagePathClone.filter(x => x === file.name).length;
      if ( result <= 0) {
        var fileName = Guid.newGuid() + file.name.substring(file.name.indexOf("."), file.name.length);
        this.sendableFormDataUniqName.append('productPics', file, fileName);
        this.imagePath.push(fileName);
      }
    });
  }

  getDate() {
    return new Date()
  }
}