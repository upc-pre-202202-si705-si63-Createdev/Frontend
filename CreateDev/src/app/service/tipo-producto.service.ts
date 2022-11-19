import { HttpClient } from '@angular/common/http';
import { Subject , EMPTY} from 'rxjs';
import { Injectable } from '@angular/core';
import { Tipo_Producto } from '../model/tipo-producto';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {

  url: string = `${environment.host}/tipoproducto`
  private listaCambio = new Subject<Tipo_Producto[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Tipo_Producto[]>(this.url+"/lista");
  }

  insertar(tipo_producto: Tipo_Producto) {
        return this.http.post(this.url, tipo_producto);
  }

  setLista(listaNueva: Tipo_Producto[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }
  
  modificar(tipo_producto: Tipo_Producto) {
    return this.http.put(this.url + "/" + tipo_producto.idTipoProducto, tipo_producto);
  }
  listarId(id: number) {
    return this.http.get<Tipo_Producto>(`${this.url}/${id}`);
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
      return this.http.post<Tipo_Producto[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}