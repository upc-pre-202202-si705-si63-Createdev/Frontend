import { Producto } from './../model/Producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string = "http://localhost:5000/Producto"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Producto[]>(this.url);
  }
}