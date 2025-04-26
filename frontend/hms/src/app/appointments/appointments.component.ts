import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'], // Note the "s" in "appointments"
  imports: [CommonModule, FormsModule],
  standalone: true
})


export class AppointmentsComponent implements OnInit {
  appointments: any[] = [];
  appointmentForm: any = {};
  isEditMode = false;
  currentAppointmentId: number | null = null;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.appointmentService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  addOrUpdateAppointment() {
    if (this.isEditMode && this.currentAppointmentId !== null) {
      this.appointmentService.updateAppointment(this.currentAppointmentId, this.appointmentForm)
        .subscribe(() => {
          this.resetForm();
          this.getAllAppointments();
        });
    } else {
      this.appointmentService.createAppointment(this.appointmentForm)
        .subscribe(() => {
          this.resetForm();
          this.getAllAppointments();
        });
    }
  }

  editAppointment(appointment: any) {
    this.isEditMode = true;
    this.currentAppointmentId = appointment.id;
    this.appointmentForm = { ...appointment };
  }

  deleteAppointment(id: number) {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.appointmentService.deleteAppointment(id).subscribe(() => {
        this.getAllAppointments();
      });
    }
  }

  resetForm() {
    this.appointmentForm = {};
    this.isEditMode = false;
    this.currentAppointmentId = null;
  }
}
