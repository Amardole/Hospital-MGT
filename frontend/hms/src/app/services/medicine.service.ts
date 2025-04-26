import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private baseUrl = 'http://localhost:8082/api/v2/medicines';

  constructor(private http: HttpClient) { }

  getMedicines(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMedicineById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMedicine(medicine: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, medicine);
  }

  updateMedicine(id: number, medicine: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, medicine);
  }

  deleteMedicine(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
