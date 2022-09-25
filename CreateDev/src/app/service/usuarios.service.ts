import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuarios } from '../model/Usuarios';

import { Subject,EMPTY } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = "http://localhost:5000/Usuarios"
  private listaCambio = new Subject<Usuarios[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Usuarios[]>(this.url);
  }
  insertar(Usuarios: Usuarios) {
    return this.http.post(this.url, Usuarios);
  }
  setLista(listaNueva: Usuarios[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(Usuarios: Usuarios) {
    return this.http.put(this.url + "/" + Usuarios.id, Usuarios);
  }
  listarId(id: number) {
    return this.http.get<Usuarios>(`${this.url}/${id}`);
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
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Usuarios[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}


