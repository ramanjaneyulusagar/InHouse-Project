import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
// import { FormGroupModule } from '../form-group/form-group.module';
import { INHOUSERoutingModule } from './in-house-routing.module';
import { MainHeaderComponent } from './HEADER/main-header/main-header.component';
import { MainFooterComponent } from './HEADER/main-footer/main-footer.component';
import { ForgetPasswordComponent } from './LOGIN/forget-password/forget-password.component';
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
import { ApplicantSearchComponent } from './APPLICANT/applicant-search/applicant-search.component';
import { UserProfileDialogComponent } from './USER/user-profile-dialog/user-profile-dialog.component';
import { UserAdminTypeLoginComponent } from './LOGIN/login-type/user-admin-type-login.component';
import { LoginPageComponent } from './LOGIN/login-page/login-page.component';
import { RegistrationPageComponent } from './LOGIN/registration/registration-page.component';
import { FilterPipe } from './PIPES/filter.pipe';
import { FileUploadDashboardComponent } from './APPLICANT/file-upload-dashboard/file-upload-dashboard.component';
import { ApplicantDashboardComponent } from './APPLICANT/applicant-dashboard/applicant-dashboard.component';
import { DataTableComponent } from './APPLICANT/data-table/data-table.component';
import { MatDrawer } from '@angular/material/sidenav';
import { ProfileComponent } from './USER/profile/profile.component';
import { AppHeader1Component } from './HEADER/app-header1/app-header1.component';
import { Profile1Component } from './USER/profile1/profile1.component';
import { ContactComponent } from './HEADER/contact/contact.component';

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
    ProfileComponent,
    AppHeader1Component,
    Profile1Component,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    INHOUSERoutingModule,
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
export class INHOUSEModule {}
