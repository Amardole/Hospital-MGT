import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PatientService } from '../services/patients.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  imports:[CommonModule,FormsModule],
  standalone:true
})
export class PatientsComponent implements OnInit {
  patients: any[] = [];  // ❌ You had [FormsModule] here by mistake
  patientForm: any = {};

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  addPatient() {
    this.patientService.createPatient(this.patientForm).subscribe(() => {
      this.getAllPatients();
      this.patientForm = {};
    });
  }

  updatePatient(patient: any) {
    this.patientService.updatePatient(patient.id, patient).subscribe(() => {
      this.getAllPatients();
    });
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(() => {
      this.getAllPatients();
    });
  }
}
