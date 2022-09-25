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
import { UsuariosComponent } from './page/Usuarios/usuarios.component';

import{MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ArtesanosListarComponent } from './page/Artesanos/Artesanos-listar/artesanos-listar.component';
import { ClientesListarComponent } from './page/Clientes/Clientes-listar/clientes-listar.component';
import { ProductoListarComponent } from './page/Producto/Producto-listar/producto-listar.component';
import { ProductoCreaeditaComponent } from './page/Producto/Producto-creaedita/producto-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { TipoProductoComponent } from './page/tipo-producto/tipo-producto.component';
import { TipoProductoListarComponent } from './page/tipo-producto/tipo-producto-listar/tipo-producto-listar.component';
import { TipoProductoCreaeditaComponent } from './page/tipo-producto/tipo-producto-creaedita/tipo-producto-creaedita.component';
import { TipoProductoDialogoComponent } from './page/tipo-producto/tipo-producto-listar/tipo-producto-dialogo/tipo-producto-dialogo/tipo-producto-dialogo.component';
import { ProductoDialogoComponent } from './page/Producto/Producto-listar/Producto-dialogo/producto-dialogo/producto-dialogo.component';
import { ProductoBuscarComponent } from './page/Producto/Producto-buscar/producto-buscar.component';
import { TipoProductoBuscarComponent } from './page/tipo-producto/tipo-producto-buscar/tipo-producto-buscar.component';



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
    UsuariosComponent,
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
    TipoProductoBuscarComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
