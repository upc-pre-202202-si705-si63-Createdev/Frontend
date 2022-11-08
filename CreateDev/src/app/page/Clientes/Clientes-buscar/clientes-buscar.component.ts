import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-clientes-buscar',
  templateUrl: './clientes-buscar.component.html',
  styleUrls: ['./clientes-buscar.component.css']
})
export class ClientesBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private ClientesService:ClientesService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Cliente[] = [];
    this.ClientesService.listar().subscribe(data => {
      data.forEach((element, index) => {  
        if (element.dni.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.ClientesService.setLista(array);
    })
  }

}
