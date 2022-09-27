import { CompraCreaeditaComponent } from './page/Compra/compra-creaedita/compra-creaedita.component';

import { TipoComprobanteCreaeditaComponent } from './page/tipo-comprobante/tipo-comprobante-creaedita/tipo-comprobante-creaedita.component';
import { TipoComprobanteComponent } from './page/tipo-comprobante/tipo-comprobante.component';

import { PedidoCreaeditaComponent } from './page/Pedido/pedido-creaedita/pedido-creaedita.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './page/Usuarios/usuarios.component';
import { UsuariosCreaeditaComponent } from './page/Usuarios/usuarios-creaedita/usuarios-creaedita.component';


import { ArtesanosComponent } from './page/Artesanos/artesanos.component';
import { ClientesComponent } from './page/Clientes/clientes.component';
import { CompraComponent } from './page/Compra/compra.component';
import { DetalleCompraComponent } from './page/detalle-compra/detalle-compra.component';
import { PedidoComponent } from './page/Pedido/pedido.component';

import { ProductoComponent } from './page/Producto/producto.component';
import { TipoProductoComponent } from './page/tipo-producto/tipo-producto.component';
import { ProductoCreaeditaComponent } from './page/Producto/Producto-creaedita/producto-creaedita.component';
import { TipoProductoCreaeditaComponent } from './page/tipo-producto/tipo-producto-creaedita/tipo-producto-creaedita.component';
import { SolicitudDisenioComponent } from './page/solicitud-disenio/solicitud-disenio.component';





const routes: Routes = [{
  path: 'artesano', component: ArtesanosComponent, children: [

  ]

}, {
  path: 'clientes', component: ClientesComponent, children: [

  ]
}, {
  path: 'compra', component: CompraComponent, children: [
    { path: 'nuevo', component: CompraCreaeditaComponent }
  ]
}, {
  path: 'detalle-compra', component: DetalleCompraComponent, children: [

  ]
}, {
  path: 'pedido', component: PedidoComponent, children: [
    { path: 'nuevo', component: PedidoCreaeditaComponent },
    { path: 'edicion/:id', component: PedidoCreaeditaComponent }
  ]
}, {

  path: 'solicitud-disenio', component: SolicitudDisenioComponent, children: [

  ]
}, {
  path: 'usuarios', component: UsuariosComponent, children: [

  ]
}, {

  path: 'producto', component: ProductoComponent, children: [
    { path: 'nuevo', component: ProductoCreaeditaComponent },
    { path: 'edicion/:id', component: ProductoCreaeditaComponent }
  ]
}, {
  path: 'tipo-producto', component: TipoProductoComponent, children: [
    { path: 'nuevo', component: TipoProductoCreaeditaComponent },
    { path: 'edicion/:id', component: TipoProductoCreaeditaComponent }
  ]
},{


  path:'usuario', component: UsuariosComponent,children:[
    { path: 'nuevo', component: UsuariosCreaeditaComponent },
    { path: 'edicion/:id', component: UsuariosCreaeditaComponent}]
},
{
  path: 'Tipo Comprobante', component: TipoComprobanteComponent, children: [
    { path: 'nuevo', component:TipoComprobanteCreaeditaComponent },
    { path: 'edicion/:id', component:TipoComprobanteCreaeditaComponent }
  ] 
}

];



  



  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
