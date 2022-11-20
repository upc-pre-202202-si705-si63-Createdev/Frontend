import { Component, OnInit } from '@angular/core';
import { ArtesanosService } from 'src/app/service/artesanos.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Artesano } from 'src/app/model/Artesanos';
import { ArtesanosDialogoComponent } from './artesanos-dialogo/artesanos-dialogo.component';

@Component({
  selector: 'app-artesanos-listar',
  templateUrl: './artesanos-listar.component.html',
  styleUrls: ['./artesanos-listar.component.css']
})
export class ArtesanosListarComponent implements OnInit {
  lista: Artesano[] = [];
  dataSource: MatTableDataSource<Artesano> = new MatTableDataSource();
  displayedColumns: string[] = ['idArtesano', 'provincia','informacion', 'usuarios', 'acciones','acciones2'];
  private idMayor: number = 0;
  constructor(private ArtesanosService:ArtesanosService, private dialog:MatDialog ) { }

  ngOnInit(): void {

    this.ArtesanosService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    });

    this.ArtesanosService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      //console.log(data);

    });

    this.ArtesanosService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ArtesanosDialogoComponent);
  }
  eliminar(id: number) {
    this.ArtesanosService.eliminar(id).subscribe(() => {
      this.ArtesanosService.listar().subscribe(data => {
        this.ArtesanosService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
