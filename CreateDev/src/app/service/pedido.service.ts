import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../model/Pedido';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  url: string = "http://localhost:5000/pedido"
  private listaCambio = new Subject<Pedido[]>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pedido[]>(this.url);
  }
  insertar(pedido: Pedido) {
    return this.http.post(this.url, pedido);
  }
  setLista(listaNueva: Pedido[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
