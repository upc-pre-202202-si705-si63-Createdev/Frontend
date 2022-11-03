import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitud-disenio',
  templateUrl: './solicitud-disenio.component.html',
  styleUrls: ['./solicitud-disenio.component.css']
})
export class SolicitudDisenioComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
