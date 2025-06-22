import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import { GotoComponent } from './goto/goto.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Aura from '@primeng/themes/aura';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { PetGroomingComponent } from './pet-grooming/pet-grooming.component';
import { VetComponent } from './vet/vet.component';
import { DogWalkingComponent } from './dog-walking/dog-walking.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component'
import { PopoverModule } from 'primeng/popover';

@NgModule({
  declarations: [
    AppComponent,
    GotoComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ThemeToggleComponent,
    LoginComponent,
    PetGroomingComponent,
    VetComponent,
    DogWalkingComponent,
    SignupComponent,
    AccountComponent,
    
  ],

  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
    ButtonModule,
    RippleModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    PopoverModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({ theme:{
      preset:Aura,
      options:{
        darkModeSelector:'.my-app-dark'
      }
    }}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
