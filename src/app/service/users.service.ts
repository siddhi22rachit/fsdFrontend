import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = "http://34.47.168.104:8080/examiner/all";
    return this.http.get(url);
  }

  SaveData(user: any): Observable<any> {
    const url = "http://34.47.168.104:8080/examiner/create";
    return this.http.post(url, user, { responseType: 'text' });
  }

  deleteUserById(examinerID: number): Observable<any> {
    const url = `http://34.47.168.104:8080/examiner/delete/${examinerID}`;
    return this.http.delete(url,{ responseType: 'text' });
  }

}
