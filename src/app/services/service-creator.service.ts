import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceCreatorService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

   //crear producto
   createService(producto: any)  {   //Observable<any>
    const url = `${this.apiUrl}service/save`;
    return this.http.post(url, producto);
  }

  //listar servicos por categoria
  obtenerDatos(tipoServicio: string): Observable<any> {
    const url = `${this.apiUrl}service/typeServiceName/${tipoServicio}`;
    return this.http.get(url);
  }


}
