import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProductComponent } from './component/product/product.component';
import { EditComponentComponent } from './component/edit-component/edit-component.component';
import { RedComponentComponent } from './component/red-component/red-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCategoryCellRendererComponent } from './component/edit-category-cell-renderer/edit-category-cell-renderer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { UplodFileComponent } from './component/uplod-file/uplod-file.component';
import { ngfModule } from "angular-file";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CheckBoxComponent } from './component/check-box/check-box.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AdditionalInfoComponent } from './component/additional-info/additional-info.component';
import { SelectBoxViewComponent } from './component/select-box-view/select-box-view.component';
import { UplodFileViewComponent } from './component/uplod-file-view/uplod-file-view.component';
import { HomeComponent } from './component/home/home.component';
import { JwtInterceptor } from './Helper/jwt.interceptor';
import { ErrorInterceptor } from './Helper/error.interceptor';
import { LoginComponent } from './component/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './service/data-service.service';
import { OrderComponent } from './component/order/order.component';
import { PurchasedItemComponent } from './component/purchased-item/purchased-item.component';
import { AcountingComponent } from './component/acounting/acounting.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EditComponentComponent,
    RedComponentComponent,
    EditCategoryCellRendererComponent,
    UplodFileComponent,
    CheckBoxComponent,
    AdditionalInfoComponent,
    SelectBoxViewComponent,
    UplodFileViewComponent,
    HomeComponent,
    LoginComponent,
    OrderComponent,
    PurchasedItemComponent,
    AcountingComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([EditComponentComponent,RedComponentComponent,EditCategoryCellRendererComponent,
      UplodFileComponent, CheckBoxComponent,AdditionalInfoComponent,SelectBoxViewComponent, UplodFileViewComponent,PurchasedItemComponent]),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ngfModule,
    ButtonsModule.forRoot(),
    MatCheckboxModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

