import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class SupervisorService {

  private baseUrl = "http://localhost:8080/supervisor";

  constructor(private http: HttpClient) { } 

  // Fetch all teachers
  getAllSupervisor(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  // Save a new teacher
  addSupervisor(supervisor: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, supervisor, { responseType: 'text' });
  }

  // Delete a teacher by ID
  deleteSupervisorById(supervisorID: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${supervisorID}`, { responseType: 'text' });
  }
}

