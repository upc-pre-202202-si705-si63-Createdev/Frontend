import { Clientes } from './../../../model/Clientes';
import { Artesanos } from './../../../model/Artesanos';
import { Pedido } from './../../../model/Pedido';
import { ClientesService } from './../../../service/clientes.service';
import { ArtesanosService } from './../../../service/artesanos.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { solicitud_disenio } from './../../../model/solicitud-disenio';
import { SolicitudDisenioService } from 'src/app/service/solicitud-disenio.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-solicitud-disenio-creaedita',
  templateUrl: './solicitud-disenio-creaedita.component.html',
  styleUrls: ['./solicitud-disenio-creaedita.component.css']
})
export class SolicitudDisenioCreaeditaComponent implements OnInit {

  solicitud: solicitud_disenio = new solicitud_disenio();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  edicion: boolean = false;
  listaPedidos: Pedido[] = [];
  listaArtesanos: Artesanos[] = [];
  listaClientes: Clientes[] = [];
  id: number = 0;
  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  idPedidoSeleccionado: number = 0;
  idArtesanoSeleccionado: number = 0;
  idClienteSeleccionado: number = 0;

  constructor(private solicitudDisenioService: SolicitudDisenioService, private router: Router,
    private route: ActivatedRoute, private pedidoService: PedidoService, private artesanoService: ArtesanosService,
    private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.pedidoService.listar().subscribe(data => { this.listaPedidos = data });
    //this.artesanoService.listar().subscribe(data => { this.listaArtesanos = data });
    //this.clienteService.listar().subscribe(data => { this.listaClientes = data });
  }

  aceptar() {
    if (this.idPedidoSeleccionado > 0) {
      let p = new Pedido();
      p.id = this.idPedidoSeleccionado;
      this.solicitud.pedido = p;
      this.solicitud.fecha = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
      if (this.edicion) {
        this.solicitudDisenioService.modificar(this.solicitud).subscribe(() => {
          this.solicitudDisenioService.listar().subscribe(data => {
            this.solicitudDisenioService.setLista(data);
          })
        });
      } else {
        console.log("Ingresó");
        this.solicitudDisenioService.insertar(this.solicitud).subscribe(() => {
          this.solicitudDisenioService.listar().subscribe(data => {
            this.solicitudDisenioService.setLista(data);
          })
        });
      }
      this.router.navigate(['home/page/solicitud']);
    }
    else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.solicitudDisenioService.listarId(this.id).subscribe(data => {
        this.solicitud = data;
        console.log(data);
        this.idPedidoSeleccionado = data.pedido.id;
      });
    }

  }
}
