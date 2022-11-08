import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artesanos',
  templateUrl: './artesanos.component.html',
  styleUrls: ['./artesanos.component.css']
})
export class ArtesanosComponent implements OnInit {
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}