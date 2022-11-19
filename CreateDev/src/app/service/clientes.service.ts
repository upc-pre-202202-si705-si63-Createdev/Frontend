import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/Cliente';
import { environment } from 'src/environments/environment';
import { EMPTY,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  //url: string = "http://localhost:5000/Clientes"
  private url: string = "https://createdev-ricse-prueba.herokuapp.com/Clientes"
  private listaCambio = new Subject<Cliente[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Cliente[]>(this.url+"/lista");
  }
  insertar(cliente: Cliente) {

    return this.http.post(this.url, cliente);
  }
  modificar(cliente: Cliente) {

    return this.http.put(this.url, cliente);
  }
  
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto:string) {
    //console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Cliente[]>(`${this.url}/buscar`, texto.toLowerCase(),{});
  }
    return EMPTY;
  }
  listarId(id: number) {

    return this.http.get<Cliente>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Cliente[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}