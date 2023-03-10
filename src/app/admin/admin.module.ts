import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsRegisterComponent } from './doctors-register/doctors-register.component';
import { MedicalAppointmentRegistrationComponent } from './medical-appointment-registration/medical-appointment-registration.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [DoctorsRegisterComponent,MedicalAppointmentRegistrationComponent, DoctorsListComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    DoctorsRegisterComponent,MedicalAppointmentRegistrationComponent
  ]
})
export class AdminModule { }
