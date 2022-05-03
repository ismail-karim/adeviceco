import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevisPagesRoutingModule } from './devis-pages-routing.module';
import { SanteComponent } from './sante/sante.component';
import { AutoMotoComponent } from './auto-moto/auto-moto.component';
import { HabitationComponent } from './habitation/habitation.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { RcDecennalleComponent } from './rc-decennalle/rc-decennalle.component';
import { FormsModule } from '@angular/forms';
import { PaimentComponent } from './paiment/paiment.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    SanteComponent,
    AutoMotoComponent,
    HabitationComponent,
    AnimauxComponent,
    RcDecennalleComponent,
    PaimentComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    DevisPagesRoutingModule,
    FormsModule
  ]
})
export class DevisPagesModule { }
