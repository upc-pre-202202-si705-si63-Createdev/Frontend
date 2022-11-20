import { ProductoService } from 'src/app/service/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { productosPorArtesano } from 'src/app/model/productos-artesano';

@Component({
  selector: 'app-producto-productos-artesano',
  templateUrl: './producto-productos-artesano.component.html',
  styleUrls: ['./producto-productos-artesano.component.css']
})
export class ProductoProductosArtesanoComponent implements OnInit {

dataSource: MatTableDataSource<productosPorArtesano> = new MatTableDataSource();
displayedColumns: string[] = ['idArtesano', 'nombreUsuario', 'Cantidad'];

constructor(private proService: ProductoService) { }

ngOnInit(): void {
  this.proService.buscarProductosPorArtesano().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
  })
}

}
