import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { LoginformComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SaleComponent } from './sale/sale.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderReportComponent } from './order-report/order-report.component';
import { CompanyReportComponent } from './company-report/company-report.component';
import { ProductReportComponent } from './product-report/product-report.component';
import { CategoryReportComponent } from './category-report/category-report.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [

  {path:'add-product',component:AddProductComponent},
  {path:'add-company',component:AddCompanyComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'product-report',component:ProductReportComponent},
  {path:'company-report',component:CompanyReportComponent},
  {path:'category-report',component:CategoryReportComponent},
  {path:'product-edit',component:ProductEditComponent},
  { path: 'dashboardform', component: DashboardComponent },
  {path:'sale',component:SaleComponent},
  { path: 'loginform', component: LoginformComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'order', component: OrderComponent },
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
