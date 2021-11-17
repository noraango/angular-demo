import { OnInit, Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { computed, observable } from 'mobx-angular';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormatService } from 'src/app/services/format.service';
import { Employee } from 'src/models/Employee';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  //Data Table
  displayCols: string[] = ['#', 'Name', 'Salary'];
  @observable employees: Employee[] = [];
  @computed get totalSalary() {
    let sum = 0;
    this.employees.forEach((e) => {
      sum += e.salary;
    });
    return sum;
  }
  @computed get highestSalaryEmployee() {
    let employee = this.employees[0];
    this.employees.forEach((e) => {
      if (e.salary > employee.salary) {
        employee = e;
      }
    });
    return employee;
  }

  //Pagination
  length = 500;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  //Services
  private _employeeService: EmployeeService;
  private _formatService: FormatService;

  constructor(
    employeeService: EmployeeService,
    formatService: FormatService,
    public dialog: MatDialog
  ) {
    this._employeeService = employeeService;
    this._formatService = formatService;
  }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  formatVND(value: any) {
    return this._formatService.formatVND(value.toString());
  }

  //Fetch employee data
  retrieveEmployees() {
    let res = this._employeeService.retrieveEmployees(
      this.pageSize,
      this.pageIndex
    );
    this.employees = res.data;
    this.length = res.length;
  }

  //Open dialog
  onRowClick(item: Employee) {
    console.log(item);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: {
        id: item.id,
        name: item.name,
        salary: item.salary,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed!!');
    });
  }

  //Pagination event handler
  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.retrieveEmployees();
  }
}
