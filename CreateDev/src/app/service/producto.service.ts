import { Producto } from './../model/Producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string = "http://localhost:5000/producto"
  private listaCambio = new Subject<Producto[]>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Producto[]>(this.url);
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
}