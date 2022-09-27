import { Component, OnInit } from '@angular/core';

import { CompraService } from 'src/app/service/compra.service';
import { Compra } from 'src/app/model/Compra';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compra-creaedita',
  templateUrl: './compra-creaedita.component.html',
  styleUrls: ['./compra-creaedita.component.css']
})
export class CompraCreaeditaComponent implements OnInit {
  compra: Compra = new Compra();
  mensaje: string = "";


  constructor(private compraService: CompraService, private route: Router) { }

  ngOnInit(): void {

  }


  aceptar(): void {
    if (this.compra.id > 0 && this.compra.Clientes_Usuarios_id > 0 && this.compra.cantidad_total > 0 && this.compra.cantidad_total > 0 && this.compra.precio_total > 0 && this.compra.peso_total > 0 && (this.compra.Tipo_Comprobante_Id == 1 || this.compra.Tipo_Comprobante_Id == 2) && this.compra.fecha_cancelacion != "") {
      this.compraService.insertar(this.compra).subscribe(data => {
        this.compraService.listar().subscribe(data => {
          this.compraService.setLista(data);
        });
      })
      this.route.navigate(['compra']);
    }

    else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
