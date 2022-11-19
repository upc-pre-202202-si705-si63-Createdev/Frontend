import { Compra } from 'src/app/model/Compra';
import { ProductoService } from 'src/app/service/producto.service';
import { CompraService } from 'src/app/service/compra.service';
import { DetalleCompraService } from './../../../service/detalle-compra.service';
import { detalle_compra } from './../../../model/detalle-compra';
import { Producto } from 'src/app/model/Producto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-compra-creaedita',
  templateUrl: './detalle-compra-creaedita.component.html',
  styleUrls: ['./detalle-compra-creaedita.component.css']
})
export class DetalleCompraCreaeditaComponent implements OnInit {

  detalleCompra : detalle_compra = new detalle_compra();
  producto : Producto = new Producto();

  id : number=0;

  edicion : boolean = false;

  listaCompra : Compra[]= [];
  listaProducto : Producto[]= [];


  idDeCompraSeleccionada : number=0;

  idProductoSeleccionado : number=0;

  mensaje: string = "";
  

  constructor(private detaCompra: DetalleCompraService,
    private route: ActivatedRoute,
    private router: Router, private compraService: CompraService,private productoService: ProductoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.compraService.listar().subscribe(data => { this.listaCompra = data });
    this.productoService.listar().subscribe(data => { this.listaProducto = data });
  }

  aceptar(){
    if(this.detalleCompra.id>=0 && this.detalleCompra.cantidad>0 && this.detalleCompra.precio_unitario>0){
      let c = new Compra();
      c.id = this.idDeCompraSeleccionada;

      let p = new Producto();
      p.idProducto = this.idProductoSeleccionado;

      if(this.edicion){
        this.detaCompra.modificar(this.detalleCompra).subscribe(() => {
          this.detaCompra.listar().subscribe(data => {
            this.detaCompra.setLista(data);
          });
        });
      }
      else{
        this.detaCompra.insertar(this.detalleCompra).subscribe(() => {
          this.detaCompra.listar().subscribe(data => {
            this.detaCompra.setLista(data);
          });
        }, err => {
          console.log(err);
        });
      }
      this.router.navigate(['home/page/detallecompras']);
    }
    else{
      this.mensaje = "Complete los valores requeridos";
    }



  }


  init() {
    if (this.edicion) {
      this.detaCompra.listarId(this.id).subscribe(data => {
        this.detalleCompra = data
        console.log(data);
        this.idDeCompraSeleccionada = data.idCompra.id;

        console.log(data);
        this.idProductoSeleccionado = data.idCompra.id;
      });

    }

  }

}
