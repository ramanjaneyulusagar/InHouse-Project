import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';
import { ApplicantComponent } from './applicant/applicant.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]}, 
  {path: 'login', component: LoginComponent},
  {path: 'applicant', component: ApplicantComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, LoginComponent]
