import { Employee } from './Employee';

export interface EmployeeList {
  data: Employee[];
  length: number;
  totalSalary: number;
  highestSalaryEmployee: Employee | undefined;
}
