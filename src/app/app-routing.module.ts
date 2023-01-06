import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { MainHeaderComponent } from './in-house-header/main-header/main-header.component';
const routes: Routes = [
{path:'main-header',component:MainHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,preloadingStrategy:NoPreloading
  })
  // enableTracing:true
  // InitialNavigation:'enabledNonBlocking'
  // preloadingStrategy:PreloadAllModules,
],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingComponents = [DashboardComponent];
