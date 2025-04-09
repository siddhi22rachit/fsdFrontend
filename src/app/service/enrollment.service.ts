import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class EnrollmentService {

  private baseUrl = "http://localhost:8080/enrollment";

  constructor(private http: HttpClient) { } 

  // Fetch all teachers
  getAllEnrollment(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  // Save a new teacher
  addEnrollment(enrollment: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, enrollment, { responseType: 'text' });
  }

  // Delete a teacher by ID
  deleteEnrollmentById(enrollmentID: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${enrollmentID}`, { responseType: 'text' });
  }
}

