import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {EmployeeServiceService} from '../employeeService/employee-service.service';

@Component({
  selector: 'app-empoyee-manager-component',
  templateUrl: './empoyee-manager-component.component.html',
  styleUrls: ['./empoyee-manager-component.component.css']
})
export class EmpoyeeManagerComponentComponent implements OnInit {
  public employee: Employee[] = [];
  isButtonHidden = false;
  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void{
    this.employeeService.getAllEmployees().subscribe(data =>
    {
      this.employee = data;
      console.log(data);
    });
  }
  public addEmployee($event: MouseEvent): void{
    window.alert('Nice!');
  }

  hideButton(): void {
    this.isButtonHidden = true;
  }

  deleteUser(i: number): void {
    this.employeeService.removeEmployee(i).subscribe(data => {
      this.employee.splice(i, i + 1);
      console.log( i);
      console.log(this.employee);
    });
  }
}
