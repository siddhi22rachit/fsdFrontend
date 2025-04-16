import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class HallticketService {

  private baseUrl = "http://localhost:8080/hallticket";

  constructor(private http: HttpClient) { } 

  // Fetch all halltickets
  getAllHalltickets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  // Save a new hallticket
  addHallticket(hallticket: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, hallticket, { responseType: 'text' });
  }

  // Delete a hallticket by ID
  deleteHallticketById(hallticketID: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${hallticketID}`, { responseType: 'text' });
  }
}
