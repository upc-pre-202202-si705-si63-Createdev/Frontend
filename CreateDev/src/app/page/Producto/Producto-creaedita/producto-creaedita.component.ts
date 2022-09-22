import { Producto } from './../../../model/Producto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service'; 

@Component({
  selector: 'app-producto-creaedita',
  templateUrl: './producto-creaedita.component.html',
  styleUrls: ['./producto-creaedita.component.css']
})
export class ProductoCreaeditaComponent implements OnInit {

  Producto: Producto = new Producto();
  mensaje: string = "";


  constructor(private ProductoService: ProductoService,private router: Router) { }

  ngOnInit(): void {
  }

  aceptar(): void {
    if (this.Producto.nombre.length > 0 && this.Producto.descripcion.length > 0 && this.Producto.stock > 0 && this.Producto.peso > 0 && this.Producto.precio_unitario > 0 && this.Producto.material.length > 0 && this.Producto.fecha_creacion.length > 0 && this.Producto.lugar_fabricacion.length > 0  && this.Producto.Tipo_Producto_id > 0  && this.Producto.artesanos_usuario_id > 0  ) {

      this.ProductoService.insertar(this.Producto).subscribe(data => {
        this.ProductoService.listar().subscribe(data => {
          this.ProductoService.setLista(data);
        })
      })
      this.router.navigate(['productos']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
