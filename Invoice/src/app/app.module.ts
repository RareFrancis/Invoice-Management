import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginformComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaleComponent } from './sale/sale.component';
import { OrderReportComponent } from './order-report/order-report.component';
import { ProductReportComponent } from './product-report/product-report.component';
import { CompanyReportComponent } from './company-report/company-report.component';
import { CategoryReportComponent } from './category-report/category-report.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { OrderComponent } from './order/order.component';





@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    AddCompanyComponent,
    AddCategoryComponent,
    RegistrationComponent,
    LoginformComponent,
    DashboardComponent,
    SaleComponent,
    OrderReportComponent,
    ProductReportComponent,
    CompanyReportComponent,
    CategoryReportComponent,
    ProductEditComponent,
    OrderComponent,
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
