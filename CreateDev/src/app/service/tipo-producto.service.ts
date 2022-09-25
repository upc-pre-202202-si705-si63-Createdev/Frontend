import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Tipo_Producto } from '../model/tipo-producto';


@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {

  url: string = "http://localhost:5000/Tipo_Producto"
  private listaCambio = new Subject<Tipo_Producto[]>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Tipo_Producto[]>(this.url);
  }

  insertar(producto: Tipo_Producto) {
        return this.http.post(this.url, producto);
  }

  setLista(listaNueva: Tipo_Producto[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }
  
}
