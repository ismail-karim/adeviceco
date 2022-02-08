import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimauxComponent } from './animaux/animaux.component';
import { AutoMotoComponent } from './auto-moto/auto-moto.component';
import { DevisPagesComponent } from './devis-pages.component';
import { HabitationComponent } from './habitation/habitation.component';
import { RcDecennalleComponent } from './rc-decennalle/rc-decennalle.component';
import { SanteComponent } from './sante/sante.component';

const routes: Routes = [
  {path: '', component: DevisPagesComponent},
  {path: 'animaux', component: AnimauxComponent},
  {path: 'habitation', component: HabitationComponent},
  {path: 'auto-moto', component: AutoMotoComponent},
  {path: 'sante', component: SanteComponent},
  {path: 'rc-decennelle', component: RcDecennalleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevisPagesRoutingModule { }
