import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent implements OnInit {

  constructor(public route : ActivatedRoute) { }

  ngOnInit(): void {
  }

}
