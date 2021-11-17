import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/models/Employee';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogData } from 'src/models/DialogData';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  private _employeeService: EmployeeService;
  constructor(
    employeeService: EmployeeService,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this._employeeService = employeeService;
  }

  ngOnInit(): void {}

  onUpdateEmployee(item: Employee) {
    this._employeeService.updateEmployee(item);
    // this.retrieveEmployees();
    console.log('updated');
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
