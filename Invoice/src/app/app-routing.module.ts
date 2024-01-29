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


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'add-company',component:AddCompanyComponent},
  {path:'add-category',component:AddCategoryComponent},
  { path: 'dashboardform', component: DashboardComponent },
  {path:'sale',component:SaleComponent},
  { path: 'loginform', component: LoginformComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'order-report', component: OrderReportComponent },
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
