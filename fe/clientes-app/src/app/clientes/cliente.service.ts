import { Injectable } from '@angular/core';
import { CLIENTES } from "./clients.json";
import { Cliente } from "./cliente";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ClienteService {
  private urlEndPoint:string = "http://localhost:8080/api/clientes";

  constructor(private http: HttpClient) { }
  
  getClientes(): Observable<Cliente[]> { 
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}
