import { Cantidadproxsol } from 'src/app/model/Cantidadproxsol';
import { SolicitudDisenioService } from 'src/app/service/solicitud-disenio.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-solicitud-disenio-cantidadps',
  templateUrl: './solicitud-disenio-cantidadps.component.html',
  styleUrls: ['./solicitud-disenio-cantidadps.component.css']
})
export class SolicitudDisenioCantidadpsComponent implements OnInit {

  dataSource: MatTableDataSource<Cantidadproxsol> = new MatTableDataSource();
  displayedColumns: string[] = ['provincia', 'cantidadps'];

  constructor(private sService:SolicitudDisenioService) { }

  ngOnInit(): void {
    this.sService.buscarCantidadSxP().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
