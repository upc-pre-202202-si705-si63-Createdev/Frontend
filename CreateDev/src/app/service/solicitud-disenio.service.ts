import { solicitud_disenio } from './../model/solicitud-disenio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudDisenioService {

  private url: string = `${environment.host}/solicitudes`
  private listaCambio = new Subject<solicitud_disenio[]>()
  private confirmaEliminacion = new Subject<Boolean>();
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<solicitud_disenio[]>(this.url + "/lista");
  }
  insertar(solicitud_disenio: solicitud_disenio) {
    return this.http.post(this.url, solicitud_disenio);
  }
  setLista(listaNueva: solicitud_disenio[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(solicitud_disenio: solicitud_disenio) {
    return this.http.put(this.url, solicitud_disenio);
  }
  listarId(id: number) {
    return this.http.get<solicitud_disenio>(`${this.url}/${id}`);
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
}
