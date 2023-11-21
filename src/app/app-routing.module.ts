import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ServiceCreatorComponent } from './pages/service-creator/service-creator.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { ServicesComponent } from './pages/services-on/services.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { MiPlanComponent } from './pages/mi-plan/mi-plan.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'home',component: HomeComponent },
  { path: 'registro', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'creator', component: ServiceCreatorComponent },
  { path: 'header', component: HeaderComponent },
  {path: 'servicios/:tipoServicio', component: ServicesComponent},
  {path: 'profileUser', component: UserProfileComponent},
  {path: 'miPlan', component: MiPlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
