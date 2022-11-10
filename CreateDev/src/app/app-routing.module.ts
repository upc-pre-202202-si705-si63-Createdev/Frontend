
import { DetalleCompraCreaeditaComponent } from './page/detalle-compra/detalle-compra-creaedita/detalle-compra-creaedita.component';

import { ArtesanosCreaeditaComponent } from './page/Artesanos/artesanos-creaedita/artesanos-creaedita.component';

import { SolicitudDisenioCreaeditaComponent } from './page/solicitud-disenio/solicitud-disenio-creaedita/solicitud-disenio-creaedita.component';
import { PrincipalLandingComponent } from './page/principal/principal-landing/principal-landing.component';
import { PrincipalPageComponent } from './page/principal/principal-page/principal-page.component';
import { PrincipalComponent } from './page/principal/principal.component';

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
import { ClientesCreaeditaComponent } from './page/Clientes/Clientes-creaedita/clientes-creaedita.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: PrincipalComponent, children: [
      {
        path: 'page', component: PrincipalPageComponent, children: [
          {
            path: 'pedido', component: PedidoComponent, children: [
              { path: 'nuevo', component: PedidoCreaeditaComponent },
              { path: 'edicion/:id', component: PedidoCreaeditaComponent }
            ]
          },
          {
            path: 'producto', component: ProductoComponent, children: [
              { path: 'nuevo', component: ProductoCreaeditaComponent },
              { path: 'edicion/:id', component: ProductoCreaeditaComponent }
            ]
          },
          {
            path: 'solicitud', component: SolicitudDisenioComponent, children: [
              { path: 'nuevo', component: SolicitudDisenioCreaeditaComponent },
              { path: 'edicion/:id', component: SolicitudDisenioCreaeditaComponent }
            ]
          },
          {
            path: 'Usuarios', component: UsuariosComponent, children: [
              { path: 'nuevo', component: UsuariosCreaeditaComponent },
              { path: 'edicion/:id', component: UsuariosCreaeditaComponent }
            ]
          },
           {
            path: 'clientes', component: ClientesComponent, children: [
              { path: 'nuevo', component: ClientesCreaeditaComponent },
              { path: 'edicion/:id', component: ClientesCreaeditaComponent }
            ]
          },
          {
            path: 'artesanos', component: ArtesanosComponent, children: [
              { path: 'nuevo', component: ArtesanosCreaeditaComponent },
              { path: 'edicion/:id', component: ArtesanosCreaeditaComponent }
            ]
          },
          {
            path: 'compra', component: CompraComponent, children: [
              { path: 'nuevo', component: CompraCreaeditaComponent },
              { path: 'edicion/:id', component: CompraCreaeditaComponent }
            ]
          },
          {
            path: 'tipo-comprobante', component: TipoComprobanteComponent, children: [
              { path: 'nuevo', component: TipoComprobanteCreaeditaComponent },
              { path: 'edicion/:id', component: TipoComprobanteCreaeditaComponent }
            ]
          },
          {
            path: 'tipo-producto', component: TipoProductoComponent, children: [
              { path: 'nuevo', component: TipoProductoCreaeditaComponent },
              { path: 'edicion/:id', component: TipoProductoCreaeditaComponent }
            ]
          },
          {
            path: 'detallecompras', component: DetalleCompraComponent, children: [
              { path: 'nuevo', component: DetalleCompraCreaeditaComponent },
              { path: 'edicion/:id', component: DetalleCompraCreaeditaComponent }
            ]
          }
        ]
      }
    ]
  }

];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


