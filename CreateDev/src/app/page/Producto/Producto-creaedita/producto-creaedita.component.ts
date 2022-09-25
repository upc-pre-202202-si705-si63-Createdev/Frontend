import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service'; 
import { Producto } from './../../../model/Producto';

@Component({
  selector: 'app-producto-creaedita',
  templateUrl: './producto-creaedita.component.html',
  styleUrls: ['./producto-creaedita.component.css']
})
export class ProductoCreaeditaComponent implements OnInit {

 producto: Producto = new Producto();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private productoService: ProductoService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.producto.nombre.length > 0 && this.producto.descripcion.length > 0 && this.producto.stock > 0 && this.producto.peso > 0 && this.producto.precio_unitario > 0 && this.producto.material.length > 0 && this.producto.fecha_creacion.length > 0 && this.producto.lugar_fabricacion.length > 0 ) {
      if (this.edicion) {
        this.productoService.modificar(this.producto).subscribe(data => {
          this.productoService.listar().subscribe(data => {
            this.productoService.setLista(data);
          })
        })
      } else {

      this.productoService.insertar(this.producto).subscribe(data => {
        this.productoService.listar().subscribe(data => {
          this.productoService.setLista(data);
        })
      })
    }
      this.router.navigate(['/producto']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.productoService.listarId(this.id).subscribe(data => {
        this.producto = data;
      })
    }

  }
}
