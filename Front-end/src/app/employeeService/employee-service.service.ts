import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../empoyee-manager-component/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:8080/employee/getEmployees');
  }
  updateEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.put<Employee>('http://localhost:8080/employee/updateUser', employee);
  }
  removeEmployee(id: number): Observable<Employee>{
    return this.httpClient.delete<Employee>(`http://localhost:8080/employee/delete/${id}`);
  }
  getEmployeeByID(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`http://localhost:8080/employee/getUser/${id}`);
  }

}
