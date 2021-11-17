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
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [AppComponent, EmployeeComponent, EditDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatIconModule,
    MatDialogModule,
    MobxAngularModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [EmployeeService, FormatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
