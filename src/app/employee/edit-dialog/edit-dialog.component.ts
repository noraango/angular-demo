import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/models/Employee';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  private _employeeService: EmployeeService;
  constructor(employeeService: EmployeeService) {
    this._employeeService = employeeService;
  }

  ngOnInit(): void {}

  onUpdateEmployee(item: Employee) {
    this._employeeService.updateEmployee(item);
    // this.retrieveEmployees();
    console.log('updated');
  }
}
