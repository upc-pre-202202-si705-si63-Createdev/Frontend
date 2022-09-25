import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tipo_Producto } from 'src/app/model/tipo-producto';
import { TipoProductoService } from 'src/app/service/tipo-producto.service';

@Component({
  selector: 'app-tipo-producto-creaedita',
  templateUrl: './tipo-producto-creaedita.component.html',
  styleUrls: ['./tipo-producto-creaedita.component.css']
})
export class TipoProductoCreaeditaComponent implements OnInit {
  tipo_producto: Tipo_Producto = new Tipo_Producto();
  mensaje: string = "";

  constructor(private tipo_productoService: TipoProductoService,private router: Router) { }

  ngOnInit(): void {
  }

  aceptar(): void {
    if (this.tipo_producto.tipo.length > 0) {

      this.tipo_productoService.insertar(this.tipo_producto).subscribe(data => {
        this.tipo_productoService.listar().subscribe(data => {
          this.tipo_productoService.setLista(data);
        })
      })
      this.router.navigate(['/tipo-producto']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
