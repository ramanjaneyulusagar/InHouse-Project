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
import { ApplicantDashboardComponent } from './APPLICANT/applicant-dashboard/applicant-dashboard.component';
import { ApplicantSearchComponent } from './APPLICANT/applicant-search/applicant-search.component';
import { ContactComponent } from './HEADER/contact/contact.component';
import { ForgetPasswordComponent } from './LOGIN/forget-password/forget-password.component';
import { InHouseGuard } from './GUARDS/in-house.guard';
import { LoginPageComponent } from './LOGIN/login-page/login-page.component';
import { MainFooterComponent } from './HEADER/main-footer/main-footer.component';
import { MainHeaderComponent } from './HEADER/main-header/main-header.component';
import { ProfileComponent } from './USER/profile/profile.component';
import { Profile1Component } from './USER/profile1/profile1.component';
import { RegistrationPageComponent } from './LOGIN/registration/registration-page.component';
import { UserAdminTypeLoginComponent } from './LOGIN/login-type/user-admin-type-login.component';
import { UserProfileDialogComponent } from './USER/user-profile-dialog/user-profile-dialog.component';
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
  // { path: '', redirectTo: '', pathMatch: 'full' },
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
  { path: 'profile', component: ProfileComponent },
  { path: 'profile1', component: Profile1Component },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class INHOUSERoutingModule {}
