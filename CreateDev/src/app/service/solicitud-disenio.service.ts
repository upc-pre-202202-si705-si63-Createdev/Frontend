import { solicitud_disenio } from './../model/solicitud-disenio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/Pedido';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SolicitudDisenioService {

  url: string = "http://localhost:5000/solicitudes"
  private listaCambio = new Subject<solicitud_disenio[]>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<solicitud_disenio[]>(this.url);
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
}
