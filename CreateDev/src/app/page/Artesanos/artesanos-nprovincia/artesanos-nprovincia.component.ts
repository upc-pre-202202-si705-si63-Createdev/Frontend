import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Artesano } from 'src/app/model/Artesanos';
import { ArtesanosService } from 'src/app/service/artesanos.service';

@Component({
  selector: 'app-artesanos-nprovincia',
  templateUrl: './artesanos-nprovincia.component.html',
  styleUrls: ['./artesanos-nprovincia.component.css']
})
export class ArtesanosNprovinciaComponent implements OnInit {

  dataSource: MatTableDataSource<Artesano> = new MatTableDataSource();
  displayedColumns: string[] = ['idArtesano', 'provincia','informacion', 'usuarios'];
  constructor(private aS:ArtesanosService) { }

  ngOnInit(): void {
    this.aS.buscarnprovincia().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
