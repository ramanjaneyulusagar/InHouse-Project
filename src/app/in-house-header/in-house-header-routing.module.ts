import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {
  InitialNavigation,
  InMemoryScrollingOptions,
  NoPreloading,
  PreloadAllModules,
  RouterConfigOptions,
  RouterModule,
  Routes,
  UrlSerializer,
  UrlTree,
} from '@angular/router';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { ApplicantSearchComponent } from './applicant-search/applicant-search.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UserAdminTypeLoginComponent } from './user-admin-type-login/user-admin-type-login.component';
import { UserProfileDialogComponent } from './user-profile-dialog/user-profile-dialog.component';
interface ExtraOptions extends InMemoryScrollingOptions, RouterConfigOptions {
  enableTracing?: true;
  useHash?: true;
  initialNavigation?: 'disabled';
  errorHandler?: ErrorHandler;
  preloadingStrategy?: any;
  scrollOffset?: [10, 10];
  malformedUriErrorHandler?: (
    error: URIError,
    urlSerializer: UrlSerializer,
    url: string
  ) => UrlTree;

  // inherited from router/InMemoryScrollingOptions
  anchorScrolling?: 'disabled';
  scrollPositionRestoration?: 'disabled';

  // inherited from router/RouterConfigOptions
  canceledNavigationResolution?: 'replace';
  onSameUrlNavigation?: 'reload';
  paramsInheritanceStrategy?: 'emptyOnly';
  urlUpdateStrategy?: 'deferred';
}
const routes: Routes = [
  { path: 'main-header', component: MainHeaderComponent },
  { path: '', component: MainHeaderComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'applicant-search', component: ApplicantSearchComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'login-page', component: LoginPageComponent },
  {
    path: 'login-page/user',
    component: LoginPageComponent,
    data: {
      loginType: 'User Login',
    },
  },
  {
    path: 'login-page/admin',
    component: LoginPageComponent,
    data: {
      loginType: 'Admin Login',
    },
  },
  { path: 'main-footer', component: MainFooterComponent },
  { path: 'registration-page', component: RegistrationPageComponent },
  { path: 'user-admin-type-login', component: UserAdminTypeLoginComponent },
  { path: 'user-profile-dialog', component: UserProfileDialogComponent },
  { path: 'applicant-dashboard', component: ApplicantDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class INHOUSEHEADERRoutingModule {}
