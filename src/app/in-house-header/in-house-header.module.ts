import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { INHOUSEHEADERRoutingModule } from './in-house-header-routing.module';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { NgOptimizedImage } from '@angular/common';
import { GenericListFilterModule } from 'generic-list-filter';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { AngularFileUploaderModule } from '@anderstornkvist/angular-file-uploader';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApplicantSearchComponent } from './applicant-search/applicant-search.component';
import { UserProfileDialogComponent } from './user-profile-dialog/user-profile-dialog.component';
import { UserAdminTypeLoginComponent } from './user-admin-type-login/user-admin-type-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FilterPipe } from './filter.pipe';
import { FileUploadDashboardComponent } from './file-upload-dashboard/file-upload-dashboard.component';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent,
    ForgetPasswordComponent,
    ApplicantSearchComponent,
    UserProfileDialogComponent,
    UserAdminTypeLoginComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    FilterPipe,
    FileUploadDashboardComponent,
    ApplicantDashboardComponent,
    DataTableComponent,
  ],
  imports: [
    CommonModule,
    INHOUSEHEADERRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FileUploadModule,
    NgbModule,
    NgOptimizedImage,
    GenericListFilterModule,
    AccordionModule,
    AngularFileUploaderModule,
    NgxPaginationModule,
  ],
})
export class INHOUSEHEADERModule {}
