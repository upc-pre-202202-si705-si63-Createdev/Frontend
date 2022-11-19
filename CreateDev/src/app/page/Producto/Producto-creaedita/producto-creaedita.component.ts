import { ArtesanosService } from './../../../service/artesanos.service';
import { TipoProductoService } from './../../../service/tipo-producto.service';
import { Artesano } from './../../../model/Artesanos';
import { Tipo_Producto } from './../../../model/tipo-producto';
import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from './../../../model/Producto';

import * as moment from 'moment';

@Component({
  selector: 'app-producto-creaedita',
  templateUrl: './producto-creaedita.component.html',
  styleUrls: ['./producto-creaedita.component.css']
})
export class ProductoCreaeditaComponent implements OnInit {

  artesano: Artesano = new Artesano();
  producto: Producto = new Producto();

  edicion: boolean = false;
  id: number = 0;

  listaTipo_Producto: Tipo_Producto[] = [];
  idTipoProductoSeleccionado: number = 0;

  listaArtesanos: Artesano[] = [];
  idArtesanoSeleccionado: number = 0;



  maxFecha: Date = moment().add(-1, 'days').toDate();
  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();


  mensaje: string = "";

  constructor(private productoService: ProductoService, private router: Router, private route: ActivatedRoute, private tipoProductoService: TipoProductoService, private artesanoService: ArtesanosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.tipoProductoService.listar().subscribe(data => { this.listaTipo_Producto = data });
    this.artesanoService.listar().subscribe(data => { this.listaArtesanos = data });
  }

  aceptar(): void {
    if (this.producto.nameProducto.length > 0 && this.producto.descripcionProducto.length > 0 && this.producto.stockProducto > 0 && this.producto.pesoProducto > 0 && this.producto.precioProducto > 0 && this.producto.materialProducto.length > 0 && this.producto.lugarfabricacionProducto.length > 0) {

      let c = new Tipo_Producto();
      c.idTipoProducto = this.idTipoProductoSeleccionado;

      this.producto.tipoproductoProducto = c;



      let a = new Artesano();
      a.idArtesano = this.idArtesanoSeleccionado;

      this.producto.artesanoProducto = a;



      this.producto.fechaProducto = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');

      if (this.edicion) {
        this.productoService.modificar(this.producto).subscribe(() => {
          this.productoService.listar().subscribe(data => {
            this.productoService.setLista(data);
          })
        })
      } else {

        this.productoService.insertar(this.producto).subscribe(() => {
          this.productoService.listar().subscribe(data => {
            this.productoService.setLista(data);
          })
        })
      }
      this.router.navigate(['/home/page/producto']);
    }
    else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.productoService.listarId(this.id).subscribe(data => {
        this.producto = data;
        console.log(data);
        this.idTipoProductoSeleccionado = data.tipoproductoProducto.idTipoProducto;
        this.idArtesanoSeleccionado = data.artesanoProducto.idArtesano;
      })

    }

  }
}
