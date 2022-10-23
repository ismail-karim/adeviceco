import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DevisComponent } from './devis/devis.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

const routes: Routes = [
    {path: '', component: LoginAdminComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'devis', component: DevisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
