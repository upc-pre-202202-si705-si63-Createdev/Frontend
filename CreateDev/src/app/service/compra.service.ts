import { HttpClient, HttpHeaderResponse } from '@angular/common/http';

import { Compra } from './../model/Compra';

import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  url : string = "http://localhost:5000/Compra";
  private listaCAmbio = new Subject<Compra[]>();

  constructor(private http : HttpClient) { }

  getLista(){
    return this.listaCAmbio.asObservable();
  } 
}
