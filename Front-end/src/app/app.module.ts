import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpoyeeManagerComponentComponent } from './empoyee-manager-component/empoyee-manager-component.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeServiceService } from './employeeService/employee-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpoyeeManagerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
