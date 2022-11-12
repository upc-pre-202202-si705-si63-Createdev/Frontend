import { detalle_compra } from './../model/detalle-compra';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleCompraService {

  
  private url: string = "http://localhost:8083/detallecompras"

  private listaCAmbio = new Subject<detalle_compra[]>();


  private confirmaEliminacion = new Subject<Boolean>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<detalle_compra[]>(this.url);
  }


  insertar(decompra: detalle_compra) {
    return this.http.post(this.url, decompra);
  }

  setLista(listaNueva: detalle_compra[]) {
    this.listaCAmbio.next(listaNueva);
  }
  getLista() {
    return this.listaCAmbio.asObservable();
  }


  modificar(decompra: detalle_compra) {
    return this.http.put(this.url, decompra);
  }

  listarId(id: number) {
    return this.http.get<detalle_compra>(`${this.url}/${id}`);
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
