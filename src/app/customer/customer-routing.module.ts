import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimalsServiceComponent } from './animals-service/animals-service.component';
import { BikeServiceComponent } from './bike-service/bike-service.component';
import { CarsServiceComponent } from './cars-service/cars-service.component';
import { CgvComponent } from './cgv/cgv.component';
import { ContactComponent } from './contact/contact.component';
import { CustumerServivesComponent } from './custumer-servives/custumer-servives.component';
import { HabitationServiceComponent } from './habitation-service/habitation-service.component';
import { HealthServiceComponent } from './health-service/health-service.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { RcServiceComponent } from './rc-service/rc-service.component';
import { SinginComponent } from './singin/singin.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signin', component: SinginComponent},
    {path: 'accueil', component: HomeComponent},
    {path: 'a-propos', component: AboutComponent},
    {path: 'profil', component: ProfilComponent},
    {path: 'CGV', component: CgvComponent},
    {path :'terms', component: TermsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'services', children: [
      {path: "", component: CustumerServivesComponent},
      {path: 'animals', component: AnimalsServiceComponent},
      {path: 'bike', component: BikeServiceComponent},
      {path: 'car', component: CarsServiceComponent},
      {path: 'habitation', component: HabitationServiceComponent},
      {path: 'rc-decenale', component: RcServiceComponent},
      {path: 'health', component: HealthServiceComponent}
    ]},
    {path: '', redirectTo: 'accueil', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
