import { Component, OnInit } from '@angular/core';
// import { MedicineService } from '../../services/medicine.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css'],
  imports:[FormsModule,CommonModule],
  standalone:true
})
export class MedicinesComponent implements OnInit {
  medicines: any[] = [];
  medicineForm: any = {};

  constructor(private medicineService: MedicineService) {}

  ngOnInit(): void {
    this.getAllMedicines();
  }

  getAllMedicines() {
    this.medicineService.getMedicines().subscribe(data => {
      this.medicines = data;
    });
  }

  addMedicine() {
    this.medicineService.createMedicine(this.medicineForm).subscribe(() => {
      this.getAllMedicines();
      this.medicineForm = {};
    });
  }

  updateMedicine(medicine: any) {
    this.medicineService.updateMedicine(medicine.id, medicine).subscribe(() => {
      this.getAllMedicines();
    });
  }

  deleteMedicine(id: number) {
    this.medicineService.deleteMedicine(id).subscribe(() => {
      this.getAllMedicines();
    });
  }
}
