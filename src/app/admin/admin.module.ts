import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AdminComponent } from './admin.component';
import { DevisComponent } from './devis/devis.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidemenuComponent,
    DevisComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
