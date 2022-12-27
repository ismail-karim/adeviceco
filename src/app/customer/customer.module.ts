import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';
import { CgvComponent } from './cgv/cgv.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CallModalComponent } from './header/call-modal/call-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SinginComponent } from './singin/singin.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './profil/profil.component';
import { HealthServiceComponent } from './health-service/health-service.component';
import { RcServiceComponent } from './rc-service/rc-service.component';
import { HabitationServiceComponent } from './habitation-service/habitation-service.component';
import { BikeServiceComponent } from './bike-service/bike-service.component';
import { CarsServiceComponent } from './cars-service/cars-service.component';
import { AnimalsServiceComponent } from './animals-service/animals-service.component';
import { CustumerServivesComponent } from './custumer-servives/custumer-servives.component';
import { HeaderPageComponent } from './header-page/header-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    CgvComponent,
    ContactComponent,
    LoginComponent,
    CallModalComponent,
    FooterComponent,
    SinginComponent,
    TermsComponent,
    AboutComponent,
    ProfilComponent,
    HealthServiceComponent,
    RcServiceComponent,
    HabitationServiceComponent,
    BikeServiceComponent,
    CarsServiceComponent,
    AnimalsServiceComponent,
    CustumerServivesComponent,
    HeaderPageComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
  
})
export class CustomerModule { }
