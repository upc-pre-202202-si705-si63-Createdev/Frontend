import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url: string = "http://localhost:5000/pedido"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pedido[]>(this.url);
  }
}
