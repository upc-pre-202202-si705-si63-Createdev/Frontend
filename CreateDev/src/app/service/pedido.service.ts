import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../model/Pedido';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private url: string = "https://createdev-ricse-prueba.herokuapp.com/pedidos"
  private listaCambio = new Subject<Pedido[]>()
  private confirmaEliminacion = new Subject<Boolean>();
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pedido[]>(this.url + "/lista");
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
    return this.http.put(this.url, Pedido);
  }
  listarId(id: number) {
    return this.http.get<Pedido>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
