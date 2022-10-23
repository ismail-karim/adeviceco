import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AdminComponent } from './admin.component';
import { DevisComponent } from './devis/devis.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidemenuComponent,
    DevisComponent,
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
