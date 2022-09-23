import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../model/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url: string = "http://localhost:5000/Clientes"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Clientes[]>(this.url);
  }
}