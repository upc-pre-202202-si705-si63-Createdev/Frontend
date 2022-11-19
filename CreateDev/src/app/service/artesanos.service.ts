import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artesano } from '../model/Artesanos';
import { environment } from 'src/environments/environment';
import { EMPTY, Subject } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class ArtesanosService {

  //url: string = "http://localhost:5000/Clientes"
  private url: string = "https://createdev-ricse-prueba.herokuapp.com/artesanos"
  private listaCambio = new Subject<Artesano[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Artesano[]>(this.url+"/lista");
  }
  insertar(Artesanos: Artesano) {

    return this.http.post(this.url, Artesanos);
  }
  modificar(Artesanos: Artesano) {

    return this.http.put(this.url, Artesanos);
  }
  
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto:string) {
    //console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Artesano[]>(`${this.url}/buscar`, texto.toLowerCase(),{});
  }
    return EMPTY;
  }
  listarID(id: number) {

    return this.http.get<Artesano>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Artesano[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
