import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CgvComponent } from './cgv/cgv.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SinginComponent } from './singin/singin.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: SinginComponent},
  {path: 'accueil', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'a-propos', component: AboutComponent},
  {path: 'CGV', component: CgvComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
  {path: 'services', loadChildren: () => import('./devis-pages/devis-pages.module').then((m) => m.DevisPagesModule)},
  {path: '', redirectTo:'accueil', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
