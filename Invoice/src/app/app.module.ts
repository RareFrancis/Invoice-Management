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
