import { Component, OnInit } from '@angular/core';
import { Tipo_Producto } from 'src/app/model/tipo-producto';
import { TipoProductoService } from 'src/app/service/tipo-producto.service';

@Component({
  selector: 'app-tipo-producto-buscar',
  templateUrl: './tipo-producto-buscar.component.html',
  styleUrls: ['./tipo-producto-buscar.component.css']
})
export class TipoProductoBuscarComponent implements OnInit {

  textoBuscar: string = ""

  constructor(private tipo_productoService: TipoProductoService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: Tipo_Producto[] = [];
    this.tipo_productoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.tipo.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.tipo_productoService.setLista(array);
    })
  }

}
