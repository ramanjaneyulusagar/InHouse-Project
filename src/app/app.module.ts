import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { InhouseService } from './app.service';
import { GenericListFilterModule } from 'generic-list-filter';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AngularFileUploaderModule } from '@anderstornkvist/angular-file-uploader';
import { NgxPaginationModule } from 'ngx-pagination';
import { provideImageKitLoader } from '@angular/common';
import { provideCloudflareLoader } from '@angular/common';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api'; //api
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
// import { NgxCsvModule } from 'ngx-csv';
// import{CsvFormat} from '@angular/common';
// import { NgxCsvModule } from 'ngx-csv';
import { ImagesSliderComponent } from './Header-Main/images-slider/images-slider.component';
import { INHOUSEModule } from './in-house/in-house.module';
import { INHOUSERoutingModule } from './in-house/in-house-routing.module';
import { MaterialModule } from './material/material.module';
// import { FormGroupModule } from './form-group/form-group.module';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ImagesSliderComponent,
  ],
  providers: [
    InhouseService,
    // provideImageKitLoader('https://ik.imagekit.io/arungudelli/'),
    // provideCloudflareLoader("<cloudflare cdn url>")
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    GenericListFilterModule,
    AngularFileUploaderModule,
    NgxPaginationModule,
    AccordionModule,
    FileUploadModule,
    CommonModule,
    INHOUSEModule,
    INHOUSERoutingModule,
    MaterialModule,
  ],
})
export class AppModule {}
