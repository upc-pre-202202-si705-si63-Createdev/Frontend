import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment';

import { Subject,EMPTY } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //url: string = "http://localhost:5000/Usuarios"
  private url: string = "http://localhost:8083/Usuarios"
  private listaCambio = new Subject<Usuario[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Usuario[]>(this.url+"/lista");
  }
  insertar(Usuarios: Usuario) {
    return this.http.post(this.url,Usuarios);
  }
  setLista(listaNueva: Usuario[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(Usuarios: Usuario) {
    return this.http.put(this.url,Usuarios);
  }
  listarId(id: number) {
    return this.http.get<Usuario>(`${this.url}/${id}`);
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
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Usuario[]>(`${this.url}/buscar`, texto.toLowerCase(), {});
    }
    return EMPTY;
  }
}



