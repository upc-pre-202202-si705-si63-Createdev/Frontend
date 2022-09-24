import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipo_Comprobante } from '../model/tipo-comprobante';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipoComporbanteService {

 url: string = "http://localhost:5000/Tipo_Comprobante"
  constructor(private http: HttpClient) { }
  private listaCambio = new Subject<Tipo_Comprobante[]>()

  insertar(Tipo_Comprobante: any) {
    return this.http.post(this.url, Tipo_Comprobante);
  }

  listar() {
    return this.http.get<Tipo_Comprobante	[]>(this.url);
  }
  setLista(listaNueva: Tipo_Comprobante[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}