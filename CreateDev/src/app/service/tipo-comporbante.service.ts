import { Tipo_Comprobante } from './../model/tipo-comprobante';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipoComporbanteService {

 url: string = "http://localhost:5000/Tipo_Comprobante"
  constructor(private http: HttpClient) { }
  private listaCambio = new Subject<Tipo_Comprobante[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  listar() {
    return this.http.get<Tipo_Comprobante	[]>(this.url);
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
  modificar( Tipo_Comprobante: Tipo_Comprobante) {
    return this.http.put(this.url + "/" + Tipo_Comprobante.id, Tipo_Comprobante);
  }
  listarId(id: number) {
    return this.http.get<Tipo_Comprobante>(`${this.url}/${id}`);
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