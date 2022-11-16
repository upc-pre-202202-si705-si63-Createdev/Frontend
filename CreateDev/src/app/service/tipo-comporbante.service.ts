import { Tipo_Comprobante } from './../model/tipo-comprobante';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TipoComporbanteService {

  private url: string = `${environment.host}/tipocomprobantes`
  private listaCambio = new Subject<Tipo_Comprobante[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Tipo_Comprobante[]>(this.url + "/lista");
  }
  insertar(Tipo_Comprobante: any) {
    return this.http.post(this.url, Tipo_Comprobante);
  }
  setLista(listaNueva: Tipo_Comprobante[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(Tipo_Comprobante: Tipo_Comprobante) {
    return this.http.put(this.url, Tipo_Comprobante);
  }
  listarId(id: number) {
    return this.http.get<Tipo_Comprobante>(`${this.url}/${id}`);
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
      return this.http.post<Tipo_Comprobante[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}