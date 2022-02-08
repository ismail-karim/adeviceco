import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevisPagesRoutingModule } from './devis-pages-routing.module';
import { SanteComponent } from './sante/sante.component';
import { AutoMotoComponent } from './auto-moto/auto-moto.component';
import { HabitationComponent } from './habitation/habitation.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { RcDecennalleComponent } from './rc-decennalle/rc-decennalle.component';


@NgModule({
  declarations: [
    SanteComponent,
    AutoMotoComponent,
    HabitationComponent,
    AnimauxComponent,
    RcDecennalleComponent
  ],
  imports: [
    CommonModule,
    DevisPagesRoutingModule
  ]
})
export class DevisPagesModule { }
