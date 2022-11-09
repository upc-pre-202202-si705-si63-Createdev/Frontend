import { SolicitudDisenioService } from './../../../service/solicitud-disenio.service';
import { solicitud_disenio } from 'src/app/model/solicitud-disenio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-disenio-buscar',
  templateUrl: './solicitud-disenio-buscar.component.html',
  styleUrls: ['./solicitud-disenio-buscar.component.css']
})
export class SolicitudDisenioBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private solService: SolicitudDisenioService) { }

  ngOnInit(): void {
  }
  buscarArtesano(e: any) {
    let array: solicitud_disenio[] = [];
    this.solService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.artesano.usuario.nameUsuarios.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.solService.setLista(array);
    })
  }

  buscarCliente(e: any) {
    let array: solicitud_disenio[] = [];
    this.solService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.cliente.usuario.nameUsuarios.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.solService.setLista(array);
    })
  }

  buscarPedido(e: any) {
    let array: solicitud_disenio[] = [];
    this.solService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.pedido.nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.solService.setLista(array);
    })
  }
}