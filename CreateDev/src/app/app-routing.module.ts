import { TipoComprobanteComponent } from './page/tipo-comprobante/tipo-comprobante.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './page/Usuarios/usuarios.component';
import { UsuariosCreaeditaComponent } from './page/Usuarios/usuarios-creaedita/usuarios-creaedita.component';
import { ArtesanosComponent } from './page/Artesanos/artesanos.component';
import { ClientesComponent } from './page/Clientes/clientes.component';
import { CompraComponent } from './page/Compra/compra.component';
import { DetalleCompraComponent } from './page/detalle-compra/detalle-compra.component';
import { EstadoComponent } from './page/Estado/estado.component';
import { PedidoComponent } from './page/Pedido/pedido.component';
import { ProductoComponent } from './page/Producto/producto.component';
import { SolicitudDisenioComponent } from './page/solicitud-disenio/solicitud-disenio.component';
import { TipoProductoComponent } from './page/tipo-producto/tipo-producto.component';
import { ProductoCreaeditaComponent } from './page/Producto/Producto-creaedita/producto-creaedita.component';


const routes: Routes = [{
  path: 'artesano', component: ArtesanosComponent, children: [

  ]

}, {
  path: 'clientes', component: ClientesComponent, children: [

  ]
}, {
  path: 'compra', component: CompraComponent, children: [

  ]
}, {
  path: 'detalle-compra', component: DetalleCompraComponent, children: [

  ]
}, {
  path: 'estado', component: EstadoComponent, children: [

  ]
}, {
  path: 'pedido', component: PedidoComponent, children: [

  ]
}, {
  path: 'producto', component: ProductoComponent, children: [
    { path: 'nuevo', component: ProductoCreaeditaComponent }
  ]
}, {
  path: 'solicitud-disenio', component: SolicitudDisenioComponent, children: [

  ]
}, {
  path: 'tipo-producto', component: TipoProductoComponent, children: [

  ]
}, {
  path: 'usuarios', component: UsuariosComponent, children: [
    { path: 'nuevo', component: UsuariosCreaeditaComponent },
    { path: 'edicion/:id', component: UsuariosCreaeditaComponent}


  ] 
},
{
  path: 'Tipo Comprobante', component: TipoComprobanteComponent, children: [

  ] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
