import { NgModule, Component } from '@angular/core';//
import { BrowserModule } from '@angular/platform-browser';//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//
import { ArtesanosComponent } from './page/Artesanos/artesanos.component';
import { ClientesComponent } from './page/Clientes/clientes.component';
import { CompraComponent } from './page/Compra/compra.component';
import { DetalleCompraComponent } from './page/detalle-compra/detalle-compra.component';
import { PedidoComponent } from './page/Pedido/pedido.component';
import { ProductoComponent } from './page/Producto/producto.component';
import { SolicitudDisenioComponent } from './page/solicitud-disenio/solicitud-disenio.component';


import { UsuariosComponent } from './page/Usuarios/usuarios.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './custom-adapter';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ArtesanosListarComponent } from './page/Artesanos/Artesanos-listar/artesanos-listar.component';
import { ClientesListarComponent } from './page/Clientes/Clientes-listar/clientes-listar.component';
import { ProductoListarComponent } from './page/Producto/Producto-listar/producto-listar.component';
import { ProductoCreaeditaComponent } from './page/Producto/Producto-creaedita/producto-creaedita.component';
import { TipoProductoComponent } from './page/tipo-producto/tipo-producto.component';
import { TipoProductoListarComponent } from './page/tipo-producto/tipo-producto-listar/tipo-producto-listar.component';
import { TipoProductoCreaeditaComponent } from './page/tipo-producto/tipo-producto-creaedita/tipo-producto-creaedita.component';
import { TipoProductoDialogoComponent } from './page/tipo-producto/tipo-producto-listar/tipo-producto-dialogo/tipo-producto-dialogo/tipo-producto-dialogo.component';
import { ProductoDialogoComponent } from './page/Producto/Producto-listar/Producto-dialogo/producto-dialogo/producto-dialogo.component';
import { ProductoBuscarComponent } from './page/Producto/Producto-buscar/producto-buscar.component';
import { TipoProductoBuscarComponent } from './page/tipo-producto/tipo-producto-buscar/tipo-producto-buscar.component';
import { FormsModule } from '@angular/forms';
import { UsuariosListarComponent } from './page/Usuarios/usuarios-listar/usuarios-listar.component';
import { UsuariosCreaeditaComponent } from './page/Usuarios/usuarios-creaedita/usuarios-creaedita.component';
import { UsuariosDialogoComponent } from './page/Usuarios/usuarios-listar/usuarios-dialogo/usuarios-dialogo.component';
import { UsuariosBuscarComponent } from './page/Usuarios/usuarios-buscar/usuarios-buscar.component';
import { TipoComprobanteComponent } from './page/tipo-comprobante/tipo-comprobante.component';
import { TipoComprobanteCreaeditaComponent } from './page/tipo-comprobante/tipo-comprobante-creaedita/tipo-comprobante-creaedita.component';
import { TipoComprobanteBuscarComponent } from './page/tipo-comprobante/tipo-comprobante-buscar/tipo-comprobante-buscar.component';
import { TipoComprobanteListarComponent } from './page/tipo-comprobante/tipo-comprobante-listar/tipo-comprobante-listar.component';
import { TipoComprobanteDialogoComponent } from './page/tipo-comprobante/tipo-comprobante-listar/tipo-comprobante-dialogo/tipo-comprobante-dialogo.component';
import { PedidoListarComponent } from './page/Pedido/pedido-listar/pedido-listar.component';
import { PedidoCreaeditaComponent } from './page/Pedido/pedido-creaedita/pedido-creaedita.component';
import { PedidoDialogoComponent } from './page/Pedido/pedido-listar/pedido-dialogo/pedido-dialogo.component';
import { PedidoBuscarComponent } from './page/Pedido/pedido-buscar/pedido-buscar.component';
import { RouterModule } from '@angular/router';
import { CompraListarComponent } from './page/Compra/compra-listar/compra-listar.component';
import { CompraCreaeditaComponent } from './page/Compra/compra-creaedita/compra-creaedita.component';
import { CompraDialogoComponent } from './page/Compra/compra-listar/compra-dialogo/compra-dialogo.component';
import { CompraBuscarComponent } from './page/Compra/compra-buscar/compra-buscar.component';
import { PrincipalComponent } from './page/principal/principal.component';
import { PrincipalLandingComponent } from './page/principal/principal-landing/principal-landing.component';
import { PrincipalPageComponent } from './page/principal/principal-page/principal-page.component';
import { SolicitudDisenioListarComponent } from './page/solicitud-disenio/solicitud-disenio-listar/solicitud-disenio-listar.component';
import { SolicitudDisenioCreaeditaComponent } from './page/solicitud-disenio/solicitud-disenio-creaedita/solicitud-disenio-creaedita.component';

import { DetalleCompraListarComponent } from './page/detalle-compra/detalle-compra-listar/detalle-compra-listar.component';
import { DetalleCompraCreaeditaComponent } from './page/detalle-compra/detalle-compra-creaedita/detalle-compra-creaedita.component';
import { DetalleCompraBuscarComponent } from './page/detalle-compra/detalle-compra-buscar/detalle-compra-buscar.component';
import { DetalleCompraDialogoComponent } from './page/detalle-compra/detalle-compra-listar/detalle-compra-dialogo/detalle-compra-dialogo.component';

import { SolicitudDisenioDialogoComponent } from './page/solicitud-disenio/solicitud-disenio-listar/solicitud-disenio-dialogo/solicitud-disenio-dialogo.component';
import { ClientesBuscarComponent } from './page/Clientes/Clientes-buscar/clientes-buscar.component';
import { ClientesCreaeditaComponent } from './page/Clientes/Clientes-creaedita/clientes-creaedita.component';
import { ClientesDialogoComponent } from './page/Clientes/Clientes-listar/Clientes-dialogo/clientes-dialogo.component';
import { ArtesanosBuscarComponent } from './page/Artesanos/artesanos-buscar/artesanos-buscar.component';
import { ArtesanosCreaeditaComponent } from './page/Artesanos/artesanos-creaedita/artesanos-creaedita.component';
import { ArtesanosDialogoComponent } from './page/Artesanos/Artesanos-listar/artesanos-dialogo/artesanos-dialogo.component';
import { SolicitudDisenioBuscarComponent } from './page/solicitud-disenio/solicitud-disenio-buscar/solicitud-disenio-buscar.component';

import { UsuariosCorreoComponent } from './page/Usuarios/usuarios-correo/usuarios-correo.component';
import { PedidoCantidadComponent } from './page/Pedido/pedido-cantidad/pedido-cantidad.component';
import { LoginComponent } from './page/login/login.component';
import { LoginRegisterComponent } from './page/login/login-register/login-register.component';


import { ArtesanosNprovinciaComponent } from './page/Artesanos/artesanos-nprovincia/artesanos-nprovincia.component';
import { SolicitudDisenioCantidadpsComponent } from './page/solicitud-disenio/solicitud-disenio-cantidadps/solicitud-disenio-cantidadps.component';
import { SolicitudDisenioRecientesComponent } from './page/solicitud-disenio/solicitud-disenio-recientes/solicitud-disenio-recientes.component';
import { SolicitudDisenioArtesanosComponent } from './page/solicitud-disenio/solicitud-disenio-artesanos/solicitud-disenio-artesanos.component';
import { ProductoCantidadLugarComponent } from './page/Producto/producto-cantidad-lugar/producto-cantidad-lugar.component';
import { ProductoProductosArtesanoComponent } from './page/Producto/producto-productos-artesano/producto-productos-artesano.component';
import { DetalleCompraQuery1Component } from './page/detalle-compra/detalle-compra-query1/detalle-compra-query1.component';
import { DetalleCompraQuery2Component } from './page/detalle-compra/detalle-compra-query2/detalle-compra-query2.component';




@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ClientesComponent,
    UsuariosListarComponent,
    UsuariosCreaeditaComponent,
    UsuariosDialogoComponent,
    UsuariosBuscarComponent,
    ArtesanosComponent,
    CompraComponent,
    DetalleCompraComponent,
    PedidoComponent,
    ProductoComponent,
    SolicitudDisenioComponent,
    ArtesanosListarComponent,
    ClientesListarComponent,
    ProductoListarComponent,
    ProductoCreaeditaComponent,
    TipoProductoComponent,
    TipoProductoListarComponent,
    TipoProductoCreaeditaComponent,
    TipoProductoDialogoComponent,
    ProductoDialogoComponent,
    ProductoBuscarComponent,
    TipoProductoBuscarComponent,
    TipoComprobanteComponent,
    TipoComprobanteCreaeditaComponent,
    TipoComprobanteBuscarComponent,
    TipoComprobanteListarComponent,
    TipoComprobanteDialogoComponent,
    PedidoListarComponent,
    PedidoCreaeditaComponent,
    PedidoDialogoComponent,
    PedidoBuscarComponent,
    CompraListarComponent,
    CompraCreaeditaComponent,
    CompraDialogoComponent,
    CompraBuscarComponent,
    PrincipalComponent,
    PrincipalLandingComponent,
    PrincipalPageComponent,
    SolicitudDisenioListarComponent,
    SolicitudDisenioCreaeditaComponent,

    DetalleCompraListarComponent,
    DetalleCompraCreaeditaComponent,
    DetalleCompraBuscarComponent,
    DetalleCompraDialogoComponent,
    
    SolicitudDisenioDialogoComponent,
    ClientesBuscarComponent,
    ClientesCreaeditaComponent,
    ClientesDialogoComponent,
    ArtesanosBuscarComponent,
    ArtesanosCreaeditaComponent,
    ArtesanosDialogoComponent,
    SolicitudDisenioBuscarComponent,

    UsuariosCorreoComponent,
    PedidoCantidadComponent,
    LoginComponent,
    LoginRegisterComponent,

    ArtesanosNprovinciaComponent,
    SolicitudDisenioCantidadpsComponent,
    SolicitudDisenioRecientesComponent,
    SolicitudDisenioArtesanosComponent,
    ProductoCantidadLugarComponent,
    ProductoProductosArtesanoComponent,
    DetalleCompraQuery1Component,
    DetalleCompraQuery2Component



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: 'usuarios-listar', component: UsuariosListarComponent },
      { path: 'pedido', component: PedidoListarComponent },
      { path: 'tipo-comprobante-listar', component: TipoComprobanteListarComponent },
      { path: 'producto', component: ProductoListarComponent },
      { path: 'tipo-producto', component: TipoProductoListarComponent },
      { path: 'compra', component: CompraListarComponent },
      { path: 'solicitud', component: SolicitudDisenioComponent }
    ]),

  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  { provide: DateAdapter, useClass: CustomDateAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
