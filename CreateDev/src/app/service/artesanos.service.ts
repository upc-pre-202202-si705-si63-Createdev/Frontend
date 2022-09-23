import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artesanos } from '../model/Artesanos';

@Injectable({
  providedIn: 'root'
})
export class ArtesanosService {

  url: string = "http://localhost:5000/Artesanos"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Artesanos[]>(this.url);
  }
}
