import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { NavBarComponent } from './main-components/nav-bar/nav-bar.component';
import { SideBarComponent } from './main-components/side-bar/side-bar.component';
import { LoginComponent } from './main-components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth-guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddcustomerComponent } from './dashboard/addcustomer/addcustomer.component';
import { SpinnerComponent } from './main-components/alertsAndSpinners/spinner/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersComponent } from './dashboard/customers/customers.component';
import { CommonModule } from '@angular/common';
import { ShowCustomerComponent } from './dashboard/customers/show-customer/show-customer.component';
import { TimeStampToDatePipe } from './pipes/time-stamp-to-date.pipe';
import { TimeStampToDateWithTimePipe } from './pipes/time-stamp-to-date-with-time.pipe';
import { EmployeesComponent } from './dashboard/employees/employees.component';
import { SearchEmpPipe } from './pipes/search-emp.pipe';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard/customers', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
      children: [
        {
          path: 'addCustomer', 
          component: AddcustomerComponent, 
        },
        {
          path: 'customers',
          component: CustomersComponent, 
        },
        {
          path: 'customers/:id',
          component: AddcustomerComponent,
        },
        {
          path: 'employees',
          component: EmployeesComponent,
        },
      ]},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    SideBarComponent,
    LoginComponent,
    DashboardComponent,
    AddcustomerComponent,
    SpinnerComponent,
    CustomersComponent,
    ShowCustomerComponent,
    TimeStampToDatePipe,
    TimeStampToDateWithTimePipe,
    EmployeesComponent,
    SearchEmpPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    AngularFirestoreModule,
    NgbModule
   
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
