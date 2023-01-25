import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardDoctorsComponent } from './pages/dashboard-doctors/dashboard-doctors.component';
import { DashboardPatientsComponent } from './pages/dashboard-patients/dashboard-patients.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterPatientsComponent } from './auth/register-patients/register-patients.component';
import { PatientsTokenComponent } from './pages/patients-token/patients-token.component';
import { DoctorsTokenComponent } from './pages/doctors-token/doctors-token.component';
import { MedicalAppointmentSelectionComponent } from './pages/medical-appointment-selection/medical-appointment-selection.component';
import { MedicalAppointmentListComponent } from './pages/medical-appointment-list/medical-appointment-list.component';
import { NoFoundpagesComponent } from './noFound/no-foundpages.component';
import { MedicalAppointmentRegistrationComponent } from './admin/medical-appointment-registration/medical-appointment-registration.component';
import { DoctorsRegisterComponent } from './admin/doctors-register/doctors-register.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardDoctorsComponent,
    DashboardPatientsComponent,
    LoginComponent,
    RegisterPatientsComponent,
    PatientsTokenComponent,
    DoctorsTokenComponent,
    MedicalAppointmentSelectionComponent,
    MedicalAppointmentListComponent,
    NoFoundpagesComponent,
    MedicalAppointmentRegistrationComponent,
    DoctorsRegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
