import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
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
  edicion: boolean = false;
  id: number = 0;

  constructor(private tipo_productoService: TipoProductoService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['idTipoProducto'];
      this.edicion = data['idTipoProducto'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.tipo_producto.tipoTipoProducto.length > 0){
      if (this.edicion) {
        this.tipo_productoService.modificar(this.tipo_producto).subscribe(data => {
          this.tipo_productoService.listar().subscribe(data => {
            this.tipo_productoService.setLista(data);
          })
        })
      } else {

      this.tipo_productoService.insertar(this.tipo_producto).subscribe(data => {
        this.tipo_productoService.listar().subscribe(data => {
          this.tipo_productoService.setLista(data);
        })
      })
    }
      this.router.navigate(['/home/page/tipo-producto']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.tipo_productoService.listarId(this.id).subscribe(data => {
        this.tipo_producto = data;
      })
    }

  }
}
