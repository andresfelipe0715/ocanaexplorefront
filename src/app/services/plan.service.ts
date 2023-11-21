import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Obtener plan de usuario por ID
  getPlanByUserId(userId: string): Observable<any> {
    const url = `${this.apiUrl}plan/user/${userId}`;
    return this.http.get(url);
  }

  //crear plan de usuario
  savePlan(userId: string): Observable<any> {
    const url = `${this.apiUrl}plan/save`;
    const payload = { userId: userId };
    
    return this.http.post(url, payload);
  }

  // Guardar detalles del plan
  savePlanDetail(planDetail: any): Observable<any> {
    const url = `${this.apiUrl}planDetail/save`;
    return this.http.post(url, planDetail);
  }

  // Obtener servicio por id
  getServiceId(serviceId: string): Observable<any> {
    const url = `${this.apiUrl}service/${serviceId}`;
    return this.http.get(url);
  }
}
