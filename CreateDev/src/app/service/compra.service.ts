import { HttpClient, HttpHeaderResponse } from '@angular/common/http';

import { Compra } from './../model/Compra';

import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private url: string = `${environment.host}/compras`

  private listaCAmbio = new Subject<Compra[]>();


  private confirmaEliminacion = new Subject<Boolean>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Compra[]>(this.url+"/lista");
  }


  insertar(compra: Compra) {
    return this.http.post(this.url, compra);
  }

  setLista(listaNueva: Compra[]) {
    this.listaCAmbio.next(listaNueva);
  }
  getLista() {
    return this.listaCAmbio.asObservable();
  }


  modificar(compra: Compra) {
    return this.http.put(this.url, compra);
  }

  listarId(id: number) {
    return this.http.get<Compra>(`${this.url}/${id}`);
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
