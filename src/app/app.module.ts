import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,NgForm} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ApplicantComponent } from './applicant/applicant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './applicant/filter.pipe';
import { AlldetailsComponent } from './alldetails/alldetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import{MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { InhouseService } from './inhouse.service';
import { GenericListFilterModule } from 'generic-list-filter';
import { NewuserComponent } from './newuser/newuser.component';
import { ApplicantdataComponent } from './applicantdata/applicantdata.component';
import { SearchComponent } from './search/search.component';
import {MatCardModule} from '@angular/material/card';





// import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    ApplicantComponent,
    FilterPipe,
    AlldetailsComponent,
    DialogComponent,
    NewuserComponent,
    ApplicantdataComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ,NgbModule,ReactiveFormsModule, BrowserAnimationsModule,
    MatToolbarModule,MatSidenavModule,MatButtonModule,MatIconModule,MatDividerModule,
    MatDialogModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatDatepickerModule,
    MatNativeDateModule,MatRadioModule,NgMultiSelectDropDownModule.forRoot(),
    GenericListFilterModule,MatCardModule
    
    
  ],
  providers: [InhouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
