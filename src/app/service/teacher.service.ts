import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class TeacherService {

  private baseUrl = "http://localhost:8080/teacher";

  constructor(private http: HttpClient) { } 

  // Fetch all teachers
  getAllTeachers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  // Save a new teacher
  addTeacher(teacher: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, teacher, { responseType: 'text' });
  }

  // Delete a teacher by ID
  deleteTeacherById(teacherID: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${teacherID}`, { responseType: 'text' });
  }
}
