import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:8082/api/v1/patients';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getPatientById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPatient(patient: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, patient);
  }

  updatePatient(id: number, patient: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, patient);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
