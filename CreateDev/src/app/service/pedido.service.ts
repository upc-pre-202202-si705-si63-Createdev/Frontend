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
  private confirmaEliminacion = new Subject<Boolean>();
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pedido[]>(this.url);
  }
  insertar(Pedido: Pedido) {
    return this.http.post(this.url, Pedido);
  }
  setLista(listaNueva: Pedido[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(Pedido: Pedido) {
    return this.http.put(this.url + "/" + Pedido.id, Pedido);
  }
  listarId(id: number) {
    return this.http.get<Pedido>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
