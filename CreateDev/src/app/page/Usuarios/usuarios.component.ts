import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  constructor(public route:ActivatedRoute) { }

  constructor() { }


  ngOnInit(): void {
  }

}
