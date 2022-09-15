import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtesanosComponent } from './page/Artesanos/artesanos.component';
import { ClientesComponent } from './page/Clientes/clientes.component';
import { CompraComponent } from './page/Compra/compra.component';
import { DetalleCompraComponent } from './page/detalle-compra/detalle-compra.component';
import { EstadoComponent } from './page/Estado/estado.component';
import { PedidoComponent } from './page/Pedido/pedido.component';
import { ProductoComponent } from './page/Producto/producto.component';
import { SolicitudDisenioComponent } from './page/solicitud-disenio/solicitud-disenio.component';
import { TipoProductoComponent } from './page/tipo-producto/tipo-producto.component';
import { UsuariosComponent } from './page/Usuarios/usuarios.component';

import{MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ArtesanosListarComponent } from './page/Artesanos/Artesanos-listar/artesanos-listar.component';
import { ClientesListarComponent } from './page/Clientes/Clientes-listar/clientes-listar.component';
import { ProductoListarComponent } from './page/Producto/Producto-listar/producto-listar.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtesanosComponent,
    ClientesComponent,
    CompraComponent,
    DetalleCompraComponent,
    EstadoComponent,
    PedidoComponent,
    ProductoComponent,
    SolicitudDisenioComponent,
    TipoProductoComponent,
    UsuariosComponent,
    ArtesanosListarComponent,
    ClientesListarComponent,
    ProductoListarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
