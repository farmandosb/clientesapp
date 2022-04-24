import { Injectable } from '@angular/core';
import { CLIENTES } from "./clients.json";
import { Cliente } from "./cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
  getClientes(): Cliente[] { 
    return CLIENTES; 
  }
}
