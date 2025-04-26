import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8082/api/v1/appointments';

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAppointmentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, appointment);
  }

  updateAppointment(id: number, appointment: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, appointment);
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
