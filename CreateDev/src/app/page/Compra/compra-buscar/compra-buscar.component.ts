import { CompraService } from 'src/app/service/compra.service';
import { Compra } from 'src/app/model/Compra';
import { PedidoService } from './../../../service/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-buscar',
  templateUrl: './compra-buscar.component.html',
  styleUrls: ['./compra-buscar.component.css']
})
export class CompraBuscarComponent implements OnInit {

  textoBuscar : string = "";
  constructor(private compraService : CompraService) { }

  ngOnInit(): void {
  }

  buscar(e : any){
    let array : Compra[]=[];
    this.compraService.listar().subscribe(data=>{
      data.forEach((element,index)=>{
        if(element.nombre_usuario.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.compraService.setLista(array);
    });
  }

}
