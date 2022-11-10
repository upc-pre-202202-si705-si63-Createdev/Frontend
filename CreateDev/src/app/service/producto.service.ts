import { Producto } from './../model/Producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject , EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = `${environment.host}/producto`
  private listaCambio = new Subject<Producto[]>()
  private confirmaEliminacion = new Subject<Boolean>()


  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Producto[]>(this.url+"/lista");
  }

  insertar(producto: Producto) {
        return this.http.post(this.url, producto);
  }

  setLista(listaNueva: Producto[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  modificar(producto: Producto) {
    return this.http.put(this.url + "/" + producto.id, producto);
  }
  listarId(id: number) {
    return this.http.get<Producto>(`${this.url}/${id}`);
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
      return this.http.post<Producto[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}