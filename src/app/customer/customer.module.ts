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
