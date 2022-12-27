import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
  {path: 'customer', loadChildren: () => import('./customer/customer.module').then((m => m.CustomerModule))},
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
