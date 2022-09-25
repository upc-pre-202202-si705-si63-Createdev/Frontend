import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/Pedido';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-pedido-buscar',
  templateUrl: './pedido-buscar.component.html',
  styleUrls: ['./pedido-buscar.component.css']
})
export class PedidoBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Pedido[] = [];
    this.pedidoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.pedidoService.setLista(array);
    })
  }

}
