import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ArtesanosService } from 'src/app/service/artesanos.service';

@Component({
  selector: 'app-artesanos-dialogo',
  templateUrl: './artesanos-dialogo.component.html',
  styleUrls: ['./artesanos-dialogo.component.css']
})
export class ArtesanosDialogoComponent implements OnInit {

  constructor(private ArtesanosService:ArtesanosService,  
    private dialogRef: MatDialogRef<ArtesanosDialogoComponent>  ) { }
    
  
    ngOnInit(): void {
    }
    confirmar(estado: boolean) {
      this.ArtesanosService.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
  
  }
