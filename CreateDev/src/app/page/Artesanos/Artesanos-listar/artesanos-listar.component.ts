import { Component, OnInit } from '@angular/core';
import { ArtesanosService } from 'src/app/service/artesanos.service';
import { Artesanos } from 'src/app/model/Artesanos';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-artesanos-listar',
  templateUrl: './artesanos-listar.component.html',
  styleUrls: ['./artesanos-listar.component.css']
})
export class ArtesanosListarComponent implements OnInit {

  dataSource: MatTableDataSource<Artesanos> = new MatTableDataSource();
  displayedColumns:string[]=['usuarios_id','informacion','provincia'];
  constructor(private ps: ArtesanosService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe((data: Artesanos[] | undefined) => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
