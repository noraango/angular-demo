import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from 'src/app/services/employee.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormatService } from 'src/app/services/format.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MobxAngularModule } from 'mobx-angular';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './employee/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, EditDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatDialogModule,
    MobxAngularModule,
  ],
  providers: [EmployeeService, FormatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
