import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormGroupName } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormControl,
    FormsModule,
    FormGroupModule,
    FormGroupName,
    FormBuilder,
    NgForm,
  ],
  exports:[FormGroupModule]
})
export class FormGroupModule {}
