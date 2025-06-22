import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VetComponent } from './vet/vet.component';
import { DogWalkingComponent } from './dog-walking/dog-walking.component';
import { PetGroomingComponent } from './pet-grooming/pet-grooming.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'vet',component:VetComponent},
  {path:'dog-walking',component:DogWalkingComponent},
  {path:'pet-grooming',component:PetGroomingComponent},
  {path:'signup',component:SignupComponent},
  {path:'account',component:AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
