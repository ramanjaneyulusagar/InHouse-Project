import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplicantComponent } from './applicant/applicant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './applicant/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { InhouseService } from './inhouse.service';
import { GenericListFilterModule } from 'generic-list-filter';
import { MatCardModule } from '@angular/material/card';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { AngularFileUploaderModule } from '@anderstornkvist/angular-file-uploader';
import { ForgotComponent } from './forgot/forgot.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { HeaderNavComponent } from './Header-Main/header-nav/header-nav.component';
import { HeaderSideNavComponent } from './Header-Main/header-side-nav/header-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    ApplicantComponent,
    FilterPipe,
    DialogComponent,
    SideNavComponent,
    LoginformComponent,
    HomeComponent,
    ForgotComponent,
    RegistrationformComponent,
    HeaderNavComponent,
    HeaderSideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    , NgbModule, ReactiveFormsModule, BrowserAnimationsModule,
    MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatDividerModule,
    MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,
    MatNativeDateModule, MatRadioModule, NgMultiSelectDropDownModule.forRoot(),
    GenericListFilterModule, MatCardModule, MatListModule, AngularFileUploaderModule, NgxPaginationModule


  ],
  providers: [InhouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
