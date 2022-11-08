import { Component, OnInit } from '@angular/core';
import { Artesano } from 'src/app/model/Artesanos';
import { ArtesanosService} from 'src/app/service/artesanos.service';
@Component({
  selector: 'app-artesanos-buscar',
  templateUrl: './artesanos-buscar.component.html',
  styleUrls: ['./artesanos-buscar.component.css']
})
export class ArtesanosBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private ArtesanosService:ArtesanosService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Artesano[] = [];
    this.ArtesanosService.listar().subscribe(data => {
      data.forEach((element, index) => {  
        if (element.provincia.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.ArtesanosService.setLista(array);
    })
  }

}