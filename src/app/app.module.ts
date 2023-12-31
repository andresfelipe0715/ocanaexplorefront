import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ServiceCreatorComponent } from './pages/service-creator/service-creator.component';
import { HeaderComponent } from './shared/header/header.component';
import { ServicesComponent } from './pages/services-on/services.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { MiPlanComponent } from './pages/mi-plan/mi-plan.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ServiceCreatorComponent,
    HeaderComponent,
    ServicesComponent,
    UserProfileComponent,
    MiPlanComponent,
    FooterComponent,
    AdminProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
