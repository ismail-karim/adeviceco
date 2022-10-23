import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CgvComponent } from './cgv/cgv.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { SinginComponent } from './singin/singin.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signin', component: SinginComponent},
    {path: 'accueil', component: HomeComponent},
    {path: 'a-propos', component: AboutComponent},
    {path: 'profil', component: ProfilComponent},
    {path: 'CGV', component: CgvComponent},
    {path: '', redirectTo: 'accueil', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
