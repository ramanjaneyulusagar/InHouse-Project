import { NgModule } from '@angular/core';
import { INHOUSEHEADERModule } from './in-house-header/in-house-header.module';
// import { AuthGuard } from './auth.guard';
import {
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { MainHeaderComponent } from './in-house-header/main-header/main-header.component';
import * as path from 'path';
import * as Module from 'module';
import { AuthGuard } from './auth.guard';
import { InHouseGuard } from './in-house-header/in-house.guard';
// import { MainHeaderComponent } from './in-house-header/main-header/main-header.component';
const routes: Routes = [
  {
    path: 'main-header',
    loadChildren: () =>
      import('./in-house-header/main-header/main-header.component').then(
        (m: any) => m.INHOUSEHEADERModule
      )
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: NoPreloading,
    }),
    // enableTracing:true
    // InitialNavigation:'enabledNonBlocking'
    // preloadingStrategy:PreloadAllModules,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingComponents = [DashboardComponent];
