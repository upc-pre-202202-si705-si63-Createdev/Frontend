import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipo_Comprobante } from '../model/tipo-comprobante';
@Injectable({
  providedIn: 'root'
})
export class TipoComporbanteService {

  url: string = "http://localhost:5000/Tipo_Comprobante"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Tipo_Comprobante	[]>(this.url);
  }

}