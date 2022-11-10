import { detalle_compra } from './../../../model/detalle-compra';
import { DetalleCompraService } from './../../../service/detalle-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-compra-buscar',
  templateUrl: './detalle-compra-buscar.component.html',
  styleUrls: ['./detalle-compra-buscar.component.css']
})
export class DetalleCompraBuscarComponent implements OnInit {
  textoBuscar : string = "";
  constructor(private detacompraSer : DetalleCompraService) { }

  ngOnInit(): void {
  }

  buscar(e : any){
    let array : detalle_compra[]=[];
    this.detacompraSer.listar().subscribe(data=>{
      data.forEach((element,index)=>{
        if(element.idProducto.nombre.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.detacompraSer.setLista(array);
    });
  }

}
