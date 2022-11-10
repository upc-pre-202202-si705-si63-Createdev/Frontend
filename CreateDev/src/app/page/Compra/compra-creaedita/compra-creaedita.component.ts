import { Component, OnInit } from '@angular/core';

import { CompraService } from 'src/app/service/compra.service';
import { Compra } from 'src/app/model/Compra';

import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';



@Component({
  selector: 'app-compra-creaedita',
  templateUrl: './compra-creaedita.component.html',
  styleUrls: ['./compra-creaedita.component.css']
})
export class CompraCreaeditaComponent implements OnInit {
  compra: Compra = new Compra();
  mensaje: string = "";

  edicion: boolean = false;
  id: number = 0;


  listaCompras : Compra[] = [];
  idCompraSeleccionada : number=0;


  maxFecha: Date = moment().add(-1, 'days').toDate();
  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();


  constructor(private CompraService: CompraService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  init() {
    if (this.edicion) {
      this.CompraService.listarId(this.id).subscribe(data => {
        this.compra = data;
        console.log(data);
      })
    }

  }


  aceptar(): void {
    if (this.compra.id >= 0 && this.compra.nombre_usuario.length > 0 && this.compra.cantidad_total > 0 && this.compra.cantidad_total > 0 && this.compra.precio_total > 0 && this.compra.peso_total > 0 && (this.compra.tipo_comprobante == 1 || this.compra.tipo_comprobante == 2) ) {
      let c = new Compra();
      c.id = this.idCompraSeleccionada;
      this.compra.fecha_cancelacion =  moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
      
      
      if (this.edicion) {
        this.CompraService.modificar(this.compra).subscribe(() => {
          this.CompraService.listar().subscribe(data => {
            this.CompraService.setLista(data);
          })
        })
      } else {
        this.CompraService.insertar(this.compra).subscribe(data => {
          this.CompraService.listar().subscribe(data => {
            this.CompraService.setLista(data);
          });
        })
      }

      this.router.navigate(['home/page/compra']);
    }

    else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
