import { Component, Inject, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/entities/doctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctors-register',
  templateUrl: './doctors-register.component.html',
  styleUrls: ['./doctors-register.component.css'],
})
export class DoctorsRegisterComponent implements OnInit {
  constructor(private doctorsService:DoctorsService){}
  ngOnInit(): void {
    this.listarDoctores();
  }
  listarDoctores(){
    this.doctorsService.getAll().subscribe(
      res=>{
        console.log(res)
      }
    )
  }
  /*private doctorService = Inject(DoctorsService);
  doctor: DoctorModel = {
    id_doctor: 0,
    nombre_d: '',
    apellidos_d: '',
    email: '',
    contrasenia_d: '',
    dirreccion_d: '',
    especialidades: { id_especialidades: 0, descripcion_especialidad: '' },
  };
  specialities: any[] = [];
  doctors: DoctorModel[] = [];
  print(){
    console.log(this.doctor)
  }*/

  //async getDoctors(){
  //  const response = this.doctorService.getAll().subscribe((response) => {
  //    this.doctors = response;
  //    console.log(response);
  //  });
  //}
  //getDoctor(id: number) {
  //  const response = this.doctorService.getOne(id).subscribe((response) => {
  //    console.log(response);
  //  });
  //}
  //registerDoctor(doctor: DoctorModel) {
  //  const response = this.doctorService
  //    .store(doctor)
  //    .subscribe((response) => {
  //      console.log(response);
  //    });
  //}
  //updateDoctor(doctor: DoctorModel) {
  //  const response = this.doctorService
  //    .update(doctor.id, doctor)
  //    .subscribe((response) => {
  //      console.log(response);
  //    });
  //}
  //deleteDoctor(id: number) {
  //  const response = this.doctorService.destroy(id).subscribe((response) => {
  //    this.doctors = this.doctorService.filter(doctor => doctor.id != id)
  //    console.log(response);
  //  });
  //}
}
