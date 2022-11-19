import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/model/Respuesta';
import { PedidoService } from 'src/app/service/pedido.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-pedido-cantidad',
  templateUrl: './pedido-cantidad.component.html',
  styleUrls: ['./pedido-cantidad.component.css']
})
export class PedidoCantidadComponent implements OnInit {

  dataSource: MatTableDataSource<Respuesta> = new MatTableDataSource();
  displayedColumns: string[] = ['cliente', 'cantidad'];

  constructor(private vService:PedidoService) { }

  ngOnInit(): void {

this.vService.buscarCantidaddepedidosxcliente().subscribe(data=>{

  this.dataSource= new MatTableDataSource(data);
})

  }

}
