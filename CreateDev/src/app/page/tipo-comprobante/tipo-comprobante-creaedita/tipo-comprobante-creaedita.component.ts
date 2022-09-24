import { TipoComporbanteService } from 'src/app/service/tipo-comporbante.service';
import { Tipo_Comprobante } from './../../../model/tipo-comprobante';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-comprobante-creaedita',
  templateUrl: './tipo-comprobante-creaedita.component.html',
  styleUrls: ['./tipo-comprobante-creaedita.component.css']
})

export class TipoComprobanteCreaeditaComponent implements OnInit {
  Tipo_Comprobante: Tipo_Comprobante = new Tipo_Comprobante();
  id: number = 0;
  mensaje: string = "";

  constructor(private TipoComporbanteService: TipoComporbanteService,private router: Router) { }

ngOnInit(): void {  
  
  }
  aceptar(): void {
    if (this.Tipo_Comprobante.tipo.length > 0 ) {

      this.TipoComporbanteService.insertar(this.Tipo_Comprobante).subscribe (data => {
        this.TipoComporbanteService.listar().subscribe(data => {
          this.TipoComporbanteService.setLista(data);
        })
      })
      this.router.navigate(['/Tipo Comprobante']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

} 