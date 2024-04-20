import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Empleado } from '../models/empleado.model';
import { Observable } from 'rxjs';
//---CONSTANTE
const baseUrlEmpleado = AppSettings.API_ENDPOINT + "/empleado"


@Injectable({
  providedIn: 'root' 
})
export class EmpleadoService {

  constructor(private http:HttpClient) { }
  registraEmpleado(obj:Empleado): Observable<any>{
    return this.http.post(baseUrlEmpleado, obj);
  }
}
