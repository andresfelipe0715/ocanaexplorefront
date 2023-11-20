import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registerPerson(personData: any): Observable<any> {
    const url = `${this.apiUrl}person/save`;
    return this.http.post(url, personData);
  }


  login(username: string): Observable<any> {
    const url = `${this.apiUrl}user/name/${username}`;
    return this.http.get(url);
  }

}
