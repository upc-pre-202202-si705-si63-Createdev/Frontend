import { Component, OnInit } from '@angular/core';
import { Tipo_Comprobante } from 'src/app/model/tipo-comprobante';
import { TipoComporbanteService } from 'src/app/service/tipo-comporbante.service';

@Component({
  selector: 'app-tipo-comprobante-buscar',
  templateUrl: './tipo-comprobante-buscar.component.html',
  styleUrls: ['./tipo-comprobante-buscar.component.css']
})
export class TipoComprobanteBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private TipoComporbanteService: TipoComporbanteService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Tipo_Comprobante[] = [];
    this.TipoComporbanteService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.comprobante.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.TipoComporbanteService.setLista(array);
    })

  }

}
