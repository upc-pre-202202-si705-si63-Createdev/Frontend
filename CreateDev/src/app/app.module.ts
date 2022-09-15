import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtesanosComponent } from './page/artesanos/artesanos.component';
import { ClientesComponent } from './page/clientes/clientes.component';
import { CompraComponent } from './page/compra/compra.component';
import { DetalleCompraComponent } from './page/detalle-compra/detalle-compra.component';
import { EstadoComponent } from './page/estado/estado.component';
import { PedidoComponent } from './page/pedido/pedido.component';
import { PageComponent } from './page/page.component';
import { ProductoComponent } from './page/producto/producto.component';
import { SolicitudDisenioComponent } from './page/solicitud-disenio/solicitud-disenio.component';
import { TipoProductoComponent } from './page/tipo-producto/tipo-producto.component';
import { UsuariosComponent } from './page/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtesanosComponent,
    ClientesComponent,
    CompraComponent,
    DetalleCompraComponent,
    EstadoComponent,
    PedidoComponent,
    PageComponent,
    ProductoComponent,
    SolicitudDisenioComponent,
    TipoProductoComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
